var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { siteTitle: 'This Awesome Site!', name : "Nick", title: "Welcome to express!!"});
});

module.exports = router;
