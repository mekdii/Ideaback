const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../configuration/config');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now()
    }
})


const User = mongoose.model('User', UserSchema);

// save user to database
User.addUser = (user, cb)=>{

    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            cb('server error');
        }else {
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err){
                    cb('server error');
                }else{
                    user.password = hash;
                    user.save((err, result)=>{
                        if(err){
                            console.log(err);
                            cb('Failed to add', null);
                        } else{
                            cb(null, 'user added');
                        }
                    });
                }
            });
        }
    });    
};

// login 
User.getUserById = function(id, callback) {
    User.findById(id, callback);
  }
User.getUserByEmail = function(email, callback) {
    const query = {email: email}
    User.findOne(query, callback);
  }

  User.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }

module.exports = User;