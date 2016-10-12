/* 
    File name: services.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my logic elements for my services page.
*/

var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) 
{
  res.render('services', 
  { 
    title: 'Services Page',
    message: 'What I can offer you.'   
  });
});

module.exports = router;