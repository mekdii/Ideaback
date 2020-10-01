const express = require('express');
const mongoose = require('mongoose');


const config = require('./configuration/config');


const app = express();

// connect to mongoDB 
mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});


const PORT = 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));