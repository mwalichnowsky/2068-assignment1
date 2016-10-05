var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', 
  {   
    title: 'COMP2068 | Lesson 4 - Part 2', 
    message:'This is the lesson 4 homepage' 
  });
});

/* Get random number page */
router.get('/random', function(req, res, next)
{
  // Calculate a random number.
  var num = Math.random();

  // Load the random page and pass the num into it.
  res.render('random', 
  {
    title: 'Random Number',
    randomNumber: num
  })
}

module.exports = router;