/* 
    File name: experience.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my logic elements for my experience page.
*/

var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) 
{
  res.render('experience', 
  { 
    title: 'My Experience Page',
    message: 'Experience for days.'   
  });
});

module.exports = router;