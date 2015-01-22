
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'The Very Fine Blog Blog' });
});

router.get('/pay', function(req, res) {
  res.render('pay', {title: "Where's my money, honey?"});
});

//////////////////////////////////////
// router.get('/post1', function(req, res) {
//   res.render('post1', {title: "funny"});
// });

// router.get('/post2', function(req, res) {
//   res.render('post2', {title: "happy"});
// });

// router.get('/post3', function(req, res) {
//   res.render('post3', {title: "considerate"});
// });
//////////////////////////////////////

var posts = require('./posts');

router.param('post_name', function(request, response, next, post_name){
    //note: we'll define posts.find in a minute
    posts.find(post_name, function(post) {
        if(post) {
            request.post = post;
            next();
        } else {
            return next(new Error('no such post as ' + post_name + '!'))
        }
    });
});

router.get('/posts/:post_name', function(request, response) {
    response.render('post', {post: request.post});
});

module.exports = router;
