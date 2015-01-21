var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'My Blog Is A Very Fine Blog!' });
});

router.get('/pay', function(req, res) {
  res.render('pay', {title: "Where's my money, honey?"});
});

router.get('/post1', function(req, res) {
  res.render('post1', {title: "funny"});
});

router.get('/post2', function(req, res) {
  res.render('post2', {title: "happy"});
});

router.get('/post3', function(req, res) {
  res.render('post3', {title: "considerate"});
});



module.exports = router;
