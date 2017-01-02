/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;
var ew = require('node-xlsx');
var rp = require('request-promise');
var fs = require('fs');

var env = CONST.NILEOO_ADDRESS_TESTENV;
var tester = supertest.agent(env);
var mhelper = supertest.agent(CONST.MHELPER_ADDRESS);

/** 本case连打单一起测试 */

describe('Nileoo余额不足打单', function () {
    before(function() {
        this.skip();
    });
    var order;
    var trackingNumber;
    it('构造一个订单', function (done) {
        /** 用户id为3, 专门测试余额不足*/
        var url = '/api/nileoo/order/addbyId/3';
        var params = '';
        mhelper.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.code).equal(1);
                    return body;
                }).then(body => {
                    expect(body.order).not.null;
                    order = body.order.orderVo;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + CONST.MHELPER_ADDRESS + url + params + '\r\n\r\n' + 'Actual output: ' + (res ? JSON.stringify(res.body) : '') + '\r\n');
                });
            });
    });

    it('打单', function (done) {
        var url = '/logistics/logistics/print.json';
        var params = '?ids=' + order.id + '&memberId=3';
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    var msg = body.msg;
                    var code = body.code;
                    expect(msg).equal('账户余额不足。');
                    expect(code).equal('10000');
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + (res ? JSON.stringify(res.body) : '') + '\r\n');
                });
            });
    });
});