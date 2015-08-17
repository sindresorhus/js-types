'use strict';
var test = require('ava');
var jsTypes = require('./js-types');

test(function (t) {
	t.assert(Array.isArray(jsTypes));
	t.assert(jsTypes.length > 0);
	t.assert(jsTypes.indexOf('Array') !== -1);
	t.assert(jsTypes.indexOf('Number') !== -1);
});
