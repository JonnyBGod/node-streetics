var streetics = require('../lib/streetics');
var stics = new streetics({
    api_id: '00630faa7d2a151362e71943bf03b7ab'
});

stics.streetRankScore(1, function(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
});

stics.areaRankScore(38.7022294, -9.1929003, 250, function(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
});

stics.areaRankTop(38.7022294, -9.1929003, 250, function(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
});