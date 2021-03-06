var assert   = require('assert');
//var chai   = require('chai');
//var assert = chai.assert;
var formatters = require('../../lib/web3/formatters.js');
var BigNumber = require('bignumber.js');

/* globals describe, it */

describe('formatters', function () {
    describe('outputTransactionFormatter', function () {
        it('should return the correct value', function () {
            
            assert.deepEqual(formatters.outputTransactionFormatter({
                input: '0x34234kjh23kj4234',
                from: '0x00000',
                to: '0x00000',
                value: '0x3e8',
                gas: '0x3e8',
                gasPrice: '0x3e8'
            }), {
                input: '0x34234kjh23kj4234',
                from: '0x00000',
                to: '0x00000',
                value: new BigNumber(1000),
                gas: 1000,
                gasPrice: new BigNumber(1000),
            });
        });
    });
});
