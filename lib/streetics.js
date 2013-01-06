var	VERSION = '0.0.1',
	Request = require("./request").Request;

function merge(defaults, options) {
	defaults = defaults || {};
	if (options && typeof options === 'object') {
		var keys = Object.keys(options);
		for (var i = 0, len = keys.length; i < len; i++) {
			var k = keys[i];
			if (options[k] !== undefined) defaults[k] = options[k];
		}
	}
	return defaults;
}


function Streetics(options) {
	if (!(this instanceof Streetics)) return new Streetics(options);

	var defaults = {
		api_id: null,

		headers: {
			'Accept': '*/*',
			'Connection': 'close',
			'User-Agent': 'node-streetics/' + VERSION
		},

		rest_base_host: 'streetics.com',
		rest_base_url: '/api/v1/streetrank/',

		secure: false // force use of https for login/gatekeeper
	};
	this.options = merge(defaults, options);

	this._request = new Request(this.options.api_id, this.options.rest_base_url, this.options.rest_base_host);
}
Streetics.VERSION = VERSION;
module.exports = Streetics;

Streetics.prototype.streetRankScore = function(id, callback) {
	var parameters = {};
	parameters.streetid = id;

	this._request.executeRequest('score/', parameters, callback);
	return this;
};

Streetics.prototype.areaRankScore = function(lat, lng, radius, callback) {
	var parameters = {};
	parameters.lat = lat;
	parameters.lng = lng;
	parameters.radius = radius;

	this._request.executeRequest('area/', parameters, callback);
	return this;
};

Streetics.prototype.areaRankTop = function(lat, lng, radius, callback) {
	var parameters = {};
	parameters.lat = lat;
	parameters.lng = lng;
	parameters.radius = radius;

	this._request.executeRequest('area/top/', parameters, callback);
	return this;
};