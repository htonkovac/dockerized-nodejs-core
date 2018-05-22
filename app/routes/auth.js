const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const HttpStatus = require('http-status-codes');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ greeting: "auth" });
});

router.post('/login', function (req, res, next) {
  res.json({ greeting: "login_hello" });
});

router.post('/register', function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: 'Please enter email and passwords.' });
  }

  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  return res.json({ success: true, user: newUser });
  // Attempt to save the user
  newUser.save(function (err) {
    if (err) {
      return res.json({ success: false, message: err.message });
    }

    return res.json({ success: true, message: 'Successfully created new user.' });
  });


});




module.exports = router;
