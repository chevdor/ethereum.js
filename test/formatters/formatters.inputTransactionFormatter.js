var chai       = require('chai');
var expect     = chai.expect;
var formatters = require('../../lib/web3/formatters.js');
var BigNumber  = require('bignumber.js');

/* globals describe, it */

describe('formatters', function () {
    describe('inputTransactionFormatter', function () {
        it('should return the correct value', function () {

            expect(formatters.inputTransactionFormatter({
                data: '0x34234kjh23kj4234',
                value: new BigNumber(100),
                from: '0x00000',
                to: '0x00000',
                gas: 1000,
                gasPrice: new BigNumber(1000),
            })).to.deep.equal({
                data: '0x34234kjh23kj4234',
                value: '0x64',
                from: '0x00000',
                to: '0x00000',
                gas: '0x3e8',
                gasPrice: '0x3e8',
            });
        });
    });
});
