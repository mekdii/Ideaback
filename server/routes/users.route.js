const express = require('express');
const router = express.Router();

const User = require('../models/Users');



//Register handle
router.post('/register', (req, res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    
    User.addUser(user, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});

//Login Handle
router.post('/login', (req, res)=>{
    User.login(req.body.email, req.body.password, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});



module.exports = router;