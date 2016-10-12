/* 
    File name: about.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my logic elements for my about page.
*/

var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) 
{
  res.render('about', 
  { 
    title: 'About Me',
    message: 'So you want to get to know me.'   
  });
});

module.exports = router;