// posts.js
var fs = require('fs');

var find = function(post_name, cb) {
    fs.readdir('./posts/', function(err, files) {
        if (files.indexOf(post_name + '.html') !== -1) {
            fs.readFile('./posts/' + post_name + '.html', function(err, data) {
                cb(data);
            })
        } else {
            cb(null);
        }
    })
}

module.exports.find = find;