const express = require('express');
const router = express.Router();
const passport = require('passport')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({greeting:"auth"});
});

router.post('/login', function(req, res, next) {
  res.json({greeting:"login"});
});

router.post('/register', function(req, res, next) {
  res.json({greeting:"login"});
});




module.exports = router;
