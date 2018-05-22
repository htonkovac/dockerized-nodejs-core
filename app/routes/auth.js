const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const HttpStatus = require('http-status-codes');



/* GET home page. */
router.get('/deleteall', function (req, res, next) {
  User.remove({})
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

  // Attempt to save the user
  newUser.save(err => {
    if(err) {
      return res.status(HttpStatus.IM_A_TEAPOT).json({ success: false, message: err.message});
    }
    return res.status(HttpStatus.IM_A_TEAPOT).json({ success: true, message: newUser});

  });

});




module.exports = router;
