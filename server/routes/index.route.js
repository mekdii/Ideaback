const express = require('express');
const router = express.Router();

const Contact = require('../models/Contacts');
//Register handle
router.post('/contact', (req, res)=>{
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    
    Contact.addContact(contact, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});
module.exports = router;