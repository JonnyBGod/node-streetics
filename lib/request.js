/**
 * Request data from the API
 */

var https = require("https");

var Request = function Request(consumer_key, baseUrl, host, headers) {
	this._configure(consumer_key, baseUrl, host, headers);
};

Request.prototype._configure = function(consumer_key, baseUrl, host, headers) {
	this.consumer_key	= consumer_key;
	this.baseUrl		= baseUrl;
	this.host			= host;
	this.headers		= headers;
};

Request.prototype.executeRequest = function(method, parameters, callback) {

	var parameterString	= '';
	if (parameters === undefined) {
		parameters = {};
	}

	parameters.appid = this.consumer_key;

	var operator = '';
	for (var key in parameters) {
		parameterString	+= (operator + key + '=' + parameters[key]);
		if ( operator === '' ) {
			operator = '&';
		}
	}

	https.get({'host': this.host, 'path': this.baseUrl+method+parameterString, 'headers': this.headers}, function(res) {
		if (res.statusCode && res.statusCode === 200) {
			var chunks	= '';
			res.on('data', function(resultData) {
				chunks	+= resultData;
			});
			res.on('end', function() {
				callback(null, JSON.parse(chunks));
			});
		} else {
			callback({code: res.StatusCode});
		}
	}).on('error', function(error) {
		callback(error);
	});
};

exports.Request = Request;