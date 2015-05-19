
var express = require('express');
var router = express.Router();




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



// router.param('post_name', function(request, response, next, post_name){
//     //note: we'll define posts.find in a minute
//     posts.find(post_name, function(post) {
//         if(post) {
//             request.post = post;
//             next();
//         } else {
//             return next(new Error('no such post as ' + post_name + '!'))
//         }
//     });
// });

// router.get('/posts/:post_name', function(request, response) {
//     response.render('post', {post: request.post});
// });

var posts = require('../views/post');

module.exports = router;

// Get Home Page //

    router.get('/:', function(request, response) {
        response.render('post' + request.param('post_number'), posts[request.param('post_number')])
    })

    module.exports = router;


router.get('/:post_name', function(request, response) {
  // response.render('post_' + request.param('post_number'), { title: 'My Blog!' });
  var post = posts[request.param('post_name')]
  if (post !== undefined) {
    response.render('post', post);
  } else {
    response.send(404, 'NOT FOUND')
  }
})

router.get('/', function(req, res) {
  res.render('index', { title: 'The Very Fine Blog Blog' });
});

router.get('/pay', function(req, res) {
  res.render('pay', {title: "Where's my money, honey?"});
});


