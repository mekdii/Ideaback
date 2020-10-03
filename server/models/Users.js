const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
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
User.login = (email, password, cb)=>{
    User.findOne({email: email}, (err, user)=>{
        if(err){
            console.log(err);
            cb('server error');
        }else if(user==undefined){
            cb('user not found');
        }else{
            bcrypt.compare(password, user.password,(err, isMatch)=>{
                if(err){
                    cb('server error');
                }else if(isMatch===true){
                    cb(null, 'login successfully');
                }else{
                    cb('login info incorrect');
                }
            });
        }
    });

}

module.exports = User;