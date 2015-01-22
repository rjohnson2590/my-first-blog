// posts.js
var fs = require('fs');
var jade = require('jade');

var find = function(post_name, cb) {
    fs.readdir('./posts/', function(err, files) {

    	console.log(files);

        if (files.indexOf(post_name + '.jade') !== -1) {
            fs.readFile(__dirname + '/../posts/' + post_name + '.jade', function(err, data) {
                cb(jade.compile(data)() );
            })
        } else {
            cb(null);
        }
    })
}



var blogPostFiles = fs.readdirSync(__dirname + '/../posts' ) 
var collector=[];

console.log("blogpostfiles " + blogPostFiles);

blogPostFiles.forEach(function cleanFiles (value, index, array){

	var pattern = new RegExp(".jade");
	if ( pattern.test(value)  )  // file IS dot jade
		{
		collector.push(value);
		console.log("Is a dot jade file.");}
	else
		{ 
		  console.log("DID NOT FIND dot jade FILE."); 
		}
console.log(collector);
});


// var collectFiles = [];

// var gatherBlogPosts = function( ){	

// 	forEach 
// 		(var i=0, i< blogPostFiles.length, i++)
// 	{
// 	collectFiles[i]=blogPostFiles[i].push;
//     console.log(collectFiles[i]);
//     }

// return collectFiles;

// };



module.exports.find = find;