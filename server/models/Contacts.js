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
//contact
Contact.addContact = (contact, cb)=>{
    contact.save((err, result)=>{
        if(err){
            console.log(err);
            cb('Failed to send message', null);
        } else{
            cb(null, 'message sent successfully');
        }
    });
}
module.exports = Contact;