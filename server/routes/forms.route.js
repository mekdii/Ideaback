const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../configuration/config');
const Rental = require('../models/Rental');

//Rental Handle
router.post('/rental',passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const token = getToken(req.headers);
    let rental = new Rental({
        lFirstName: req.body.lFirstName,
        lLastName: req.body.lLastName,
        lemail: req.body.lemail,
        lPhone: req.body.lPhone,
        tFirstName: req.body.tFirstName,
        tLastName: req.body.tLastName,
        temail: req.body.temail,
        tPhone: req.body.tPhone,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        postal: req.body.postal,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        payPeriod: req.body.payPeriod,
        rentAmount: req.body.rentAmount,
        securityDeposit: req.body.securityDeposit,
        lateCharge: req.body.lateCharge,
        paymentMethod: req.body.paymentMethod,
        collector: req.body.collector
    });
    if (token) {
   Rental.addRental(rental, (err, result)=>{

        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
}else{
    return res.status(403).send({success: false, message: 'Unauthorized.'});
  }

});


//Add a function to get and extract the token from the request headers.
  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

module.exports = router;
