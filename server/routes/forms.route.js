const express = require('express');
const router = express.Router();

const Rental = require('../models/Rental');
//Rental Handle

router.post('/rental', (req, res)=>{
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
    
   Rental.addRental(rental, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});

module.exports = router;
