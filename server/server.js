const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const config = require('./configuration/config');
const userRoute = require('./routes/users.route');
const indexRoute = require('./routes/index.route');
const formsRoute = require('./routes/forms.route');
const ideaRoute = require('./routes/idea.route');


const app = express();
app.use(cors())
// connect to mongoDB 
mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB');
});
mongoose.set('useFindAndModify', false);
mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./configuration/passport')(passport);

// add middleware 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/forms', formsRoute);
app.use('/idea' , ideaRoute)
//set up public resources folder
app.use(express.static(__dirname + '/public'));

//set up route
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));