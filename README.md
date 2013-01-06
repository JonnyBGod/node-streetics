Streetics API client library for node.js
======================================

[node-streetics](https://github.com/JonnyBGod/node-streetics) aims to provide a complete, asynchronous client library for the Streetics API services (http>//streetics.com/en/content/api).

## Requirements

You can install node-streetics and its dependencies with npm: `npm install streetics`.

- [node](http://nodejs.org/) v0.6+

## Getting started

It's early days for node-streetics, so I'm going to assume a fair amount of knowledge for the moment. Better documentation to come as it heads towards a stable release.

### Setup API (experimental)

	var streetics = require('streetics');
	var stics = new streetics({
		api_id: 'YOUR API ID'
	});


### GET Street Rank Score

	stics.streetRankScore(1, function(error, results) {
	    if (error) {
	        console.error(error);
	    } else {
	        console.log(results);
	    }
	});

### GET Area Rank Score

	stics.areaRankScore(38.7022294, -9.1929003, 250, function(error, results) {
	    if (error) {
	        console.error(error);
	    } else {
	        console.log(results);
	    }
	});

### GET Area Rank Top

	stics.areaRankTop(38.7022294, -9.1929003, 250, function(error, results) {
	    if (error) {
	        console.error(error);
	    } else {
	        console.log(results);
	    }
	});


## Contributors

- [João Ribeiro](https://github.com/JonnyBGod) (author)
- Lots of [wonderful helper elves](https://github.com/JonnyBGod/node-streetics/contributors) on GitHub

## TODO

- Add premium services as described at (http://streetics.com/en/content/services)
- Fix ALL THE THINGS! on the GitHub [issues list](https://github.com/JonnyBGod/node-streetics/issues)