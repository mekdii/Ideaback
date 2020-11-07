  
const mongoose = require('mongoose');

const RentalSchema = mongoose.Schema ({

//land lord Information
lFirstName:{
    type: String
},
lLastName:{
    type: String
},
lemail:{
    type: String

},
lPhone:{
    type: Number
  
},
date:{
    type: Date,
    default: Date.now()
},
//tenat information
tFirstName:{
    type: String
},
tLastName:{
    type: String
},
temail:{
    type: String
},
tPhone:{
    type: Number
  
},

occupants:{
    type: Number
},
//Rental Information//

//House Rental Address
country:{
    type: String
},
state:{
    type: String
},
city:{
    type: String
},
postal:{
    type: Number
  
},
//Dates
startDate:{
    type: Date
},
endDate:{
    type: Date
},
payPeriod :String,

//financial
rentAmount:{
    type: Number
},
securityDeposit:{
    type: Number
},
lateCharge:{
    type: Number
},
paymentMethod:{
    type: String
},
collector:{
    type: String
},
terms:String,
lSignature:String,
tSignature:String

})


const Rental = mongoose.model('Rental', RentalSchema);

//save rentl data to database
Rental.addRental = (rental, cb)=>{
    rental.save((err, result)=>{
        if(err){
            console.log(err);
            cb('Failed to add data', null);
        } else{
            cb(null, 'data saved successfully');
        }
    });
}
module.exports = Rental;