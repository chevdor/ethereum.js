var chai   = require('chai');
var expect = chai.expect;
var tu     = require('../test.utils.js');
var types  = require('../../lib/solidity/types.js');

/* globals describe, it */

describe('types', function () {
    describe('methods', function () {
        tu.methodExists(types, 'prefixedType');
        tu.methodExists(types, 'namedType');
        tu.methodExists(types, 'inputTypes');
        tu.methodExists(types, 'outputTypes');
    });
});