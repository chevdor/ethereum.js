var web3   = require('../../index.js');
var u      = require('../test.utils.js');

/* globals describe */

describe('web3', function() {
    describe('shh', function() {
        u.methodExists(web3.shh, 'post');
        u.methodExists(web3.shh, 'newIdentity');
        u.methodExists(web3.shh, 'hasIdentity');
        u.methodExists(web3.shh, 'newGroup');
        u.methodExists(web3.shh, 'addToGroup');
        u.methodExists(web3.shh, 'filter');
    });
});

