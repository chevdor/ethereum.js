var chai    = require('chai');
var expect  = chai.expect;
var jsonrpc = require('../../lib/web3/jsonrpc');

/* globals describe, it */

describe('jsonrpc', function () {
    describe('isValidResponse', function () {
        it('should validate basic jsonrpc response', function () {

            // given 
            var response = {
                jsonrpc: '2.0',
                id: 1,
                result: []
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(true);
        });

        it('should validate basic undefined response', function () {

            // given 
            var response;

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(false);
        });

        it('should validate jsonrpc response without jsonrpc field', function () {

            // given 
            var response = {
                id: 1,
                result: []
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(false);
        });

        it('should validate jsonrpc response with wrong jsonrpc version', function () {

            // given 
            var response = {
                jsonrpc: '1.0',
                id: 1,
                result: []
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(false);
        });

        it('should validate jsonrpc response without id number', function () {

            // given 
            var response = {
                jsonrpc: '2.0',
                result: []
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(false);
        });

        it('should validate jsonrpc response with wrong id field', function () {

            // given 
            var response = {
                jsonrpc: '2.0',
                id: 'x',
                result: []
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(false);
        });

        it('should validate jsonrpc response without result field', function () {

            // given 
            var response = {
                jsonrpc: '2.0',
                id: 1
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(false);
        });

        it('should validate jsonrpc response with result field === false', function () {

            // given 
            var response = {
                jsonrpc: '2.0',
                id: 1,
                result: false
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(true);
        });

        it('should validate jsonrpc response with result field === 0', function () {

            // given 
            var response = {
                jsonrpc: '2.0',
                id: 1,
                result: 0
            };

            // when
            var valid = jsonrpc.isValidResponse(response);

            // then
            expect(valid).equal(true);
        });
    });
});
