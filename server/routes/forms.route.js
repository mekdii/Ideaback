const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../configuration/config');
const nodemailer = require("nodemailer");
const Rental = require('../models/Rental');
const user = require('../models/Users')
//Rental Handle
router.post('/rental', (req, res, next) => {
  
  let rental = new Rental({
    date: req.body.date,
    lFirstName: req.body.lFirstName,
    lLastName: req.body.lLastName,
    lemail: req.body.lemail,
    lPhone: req.body.lPhone,
    address: req.body.address,
    tFirstName: req.body.tFirstName,
    tLastName: req.body.tLastName,
    temail: req.body.temail,
    tPhone: req.body.tPhone,
    occupants: req.body.occupants,
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
    collector: req.body.collector,
    terms: req.body.terms,
    lSignature: req.body.lSignature,
    tSignature: req.body.tSignature
  });
  
    Rental.addRental(rental, (err, result) => {

      if (err) {
        return res.json({ success: false, message: err });
      }
      return res.json({ success: true, message: result });
    });
 
});

router.get('/rental', function (req, res) {
  Rental.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });

});

//Get rental form id
router.get('/rental/:id', function (req, res, next) {

  Rental.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

});

//Add a router to PUT a contract data by ID.
router.put('/rental/:id', function (req, res, next) {
  const id = req.params.id;
  Rental.findByIdAndUpdate( req.params_id, req.body, function (err, rental) {
    if (err) return next(err);
    res.json(rental);
  });

});

//Add a router to DELETE a contract data by ID.
router.delete('/rental/:id',  function (req, res, next) {
  
    Rental.findByIdAndRemove(req.params.id, req.body, function (err, rental) {
      if (err) return next(err);
      res.json(rental);
    });
 
});
/*
//send email
router.post("/rental/:id/sendmail", (req, res) => {
  console.log("request came");
  let rental = req.body;
  sendMail(rental, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});
async function sendMail(rental, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user.email,
      pass: user.password
    }
  });

  let mailOptions = {
    from: `"Fun Of Heuristic"<${rental.lemail}>`, // sender address
    to: rental.temail, // list of receivers
    subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
    html: `<h1>Hello ${rental.tFirstName} ${rental.tLastName}</h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
*/
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
