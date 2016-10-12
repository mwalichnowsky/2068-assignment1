/* 
    File name: contact.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my logic elements for my home page.
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', 
  { 
    title: 'Matthew Walichnowsky',
    message: 'This is my first node application.'   
  });
});

module.exports = router;