const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now()
    }
})

const Contact = mongoose.model('Contact', ContactSchema);