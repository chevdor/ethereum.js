var chai   = require('chai');
var assert = chai.assert;
var filter = require('../../lib/web3/filter');
var u = require('../test.utils.js');

/* globals describe, it */

var empty = function () {};
var implementation = {
    newFilter: empty,
    getLogs: empty,
    uninstallFilter: empty,
    startPolling: empty,
    stopPolling: empty,
};

describe('web3', function () {
    describe('eth', function () {
        describe('filter', function () {
            var f = filter({}, implementation);

            u.methodExists(f, 'watch');
            u.methodExists(f, 'stopWatching');
            u.methodExists(f, 'get');
        });
    });
});
