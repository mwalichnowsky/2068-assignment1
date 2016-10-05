var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var userList = ['Mackenzie', 'Matt', 'Nero'];

  // Load users.ejs and pass in the userList array.
  res.render('users', 
  {
    title: 'User List',
    user: userList
  });
});

module.exports = router;
