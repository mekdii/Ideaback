const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../configuration/config');

const UserSchema = mongoose.Schema({
    id:{
        type: String
    },
    title:{
        type: String
    },
 
    description:{
        type: String,
        required: true
    },
  
    
})
const Idea = mongoose.model('Idea', UserSchema);

Idea.addIdea = (rental, cb)=>{
    rental.save((err, result)=>{
        if(err){
            console.log(err);
            cb('Failed to add data', null);
        } else{
            cb(null, 'data saved successfully');
        }
    });
}
module.exports = Idea;