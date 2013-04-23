(function() {
"use strict";

console.log("Playing around with sequence.");

var Sequence = require("futures").sequence
  , sequence = Sequence()
  , err = undefined
  ;
  
sequence
	.then(function(next) {
		setTimeout(function() {
			next(err, "Hello you");
		}, 100);
	})
	.then(function(next, err, firstMessage) {
		setTimeout(function() {
			console.log(firstMessage);
			next(err, "Hello me");
		}, 200);
	})
	.then(function(next, err, secondMessage) {
		setTimeout(function() {
			console.log(secondMessage);
			next(err, "Hello world");
		}, 500);
	});

sequence
	.then(function(next, err, thirdMessage) {
		console.log(thirdMessage);
		next(err, "What happen'd");
	})
	.then(function(next, err, fourthMessage) {
		console.log(fourthMessage);
		next(err, "Now this is strange");
	});

}());