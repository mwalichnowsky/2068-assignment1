/* 
    File name: contact.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my logic elements for my contact page.
*/

var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) 
{
  res.render('contact', 
  { 
    title: 'Contact Page',
    message: 'Let us get in touch!.'   
  });
});

// transporter.sendMail(data[, callback])

module.exports = router;