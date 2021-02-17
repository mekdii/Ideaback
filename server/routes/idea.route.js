const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../configuration/config');
const nodemailer = require("nodemailer");
const Rental = require('../models/Rental');
const user = require('../models/Users');
const Idea = require('../models/idea');
//Rental Handle
router.post('/ideas', (req, res, next) => {
  
  let rental = new Idea({
    title:req.body.title,
    //code: req.body.code,
    description: req.body.description,
    //ects: req.body.ects

    
  });
  
    Idea.addIdea(rental, (err, result) => {

      if (err) {
        return res.json({ success: false, message: err });
      }
      res.json(rental);
     // return res.json({ success: true, message: result });
    });
 
});

router.get('/ideas', function (req, res) {
  Idea.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });

});

//Get idea form id
router.get('/ideas/:id', function (req, res, next) {

  Idea.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

});

//Add a router to PUT a idea data by ID.
router.put('/ideas/:id', function (req, res, next) {
  //const id = req.params.id;
  Idea.findByIdAndUpdate( req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

});

//Add a router to DELETE a idea data by ID.
router.delete('/ideas/:id',  function (req, res, next) {
  
    Idea.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
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
