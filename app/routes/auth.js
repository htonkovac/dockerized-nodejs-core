const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ greeting: "auth" });
});

router.post('/login', function (req, res, next) {
  res.json({ greeting: "login_hello" });
});

router.post('/register', function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, message: err.message });
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }

});




module.exports = router;
