var tu = require('../test.utils.js');
var rm = require('../../lib/web3/requestmanager')();

/* globals describe */

describe('RequestManager', function () {
    describe('methods', function () {
        tu.propertyExists(rm, 'send');
        tu.propertyExists(rm, 'setProvider');
        tu.propertyExists(rm, 'startPolling');
        tu.propertyExists(rm, 'stopPolling');
        tu.propertyExists(rm, 'reset');
    });
});
