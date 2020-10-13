const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../configuration/config');
const User = require('../models/Users');



//Register handle
router.post('/signup', (req, res)=>{
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
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
router.post('/login', (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
          return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
              const token = jwt.sign({data: user}, config.secret, {
                expiresIn: 604800 // expires in 1 week
              });
              res.json({
                success: true,
                token: 'JWT '+token,
                user: {
                  id: user._id,
                  name: user.name,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email
                }
              })
            } else {
              return res.json({success: false, msg: 'Wrong password'});
            }
          });
});
});
// Dashboard
router.get('/dashboard', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
  });
  

module.exports = router;