/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;

var env = CONST.NILEOO_ADDRESS_TESTENV;
var tester = supertest.agent(env);

describe('Nileoo查询订单详细', function () {

    it('基本验证', function (done) {
        var url = __path(__filename, 1);
        var orderId = 8;
        var params = 'orderId=' + orderId;
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("success.");
                    return body;
                }).then(body => {
                    expect(body.code).equal("0");
                    var result = body.result;
                    expect(result.id).equal(orderId);
                    expect(result.code).not.null;
                    expect(result.phone).not.null;
                    expect(result.orderNumber).not.null;
                    expect(result.hasPrint).not.null;
                    expect(result.orderStatus).not.null;
                    expect(result.creatorMember).not.null;
                    expect(result.trackingNumber).not.null;
                    expect(result.items.length).least(1);
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});
