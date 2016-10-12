/* 
    File name: projects.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my logic elements for my projects page.
*/

var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) 
{
  res.render('projects', 
  { 
    title: 'My Projects',
    message: 'This website is one of them! You can see more below...'   
  });
});

module.exports = router;