const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./configuration/config');
const userRoute = require('./routes/users.route');
const indexRoute = require('./routes/index.route');

const app = express();

// connect to mongoDB 
mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

// add middleware 
app.use(bodyParser.json());
app.use('/', indexRoute);
app.use('/users', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));