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

var mhelper = supertest.agent(CONST.MHELPER_ADDRESS);

/** 在进行本接口测试的同时，也测试到了Import的接口。MHelper的业务逻辑验证了import，如果失败，本接口也会报错 */
describe('Nileoo删除订单接口', function () {

    var front;
    var back;

    it('为前台删除造订单', function (done) {
        var url = '/api/nileoo/order/addrandom';
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
                    front = body.order;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + (res ? JSON.stringify(res.body) : '') + '\r\n');
                });
            });
    });


    it('为后台删除造订单', function (done) {
        var url = '/api/nileoo/order/addrandom';
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
                    back = body.order;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });


    it('前台删除订单', function (done) {
        var url = __path(__filename, 1);
        var params = 'ids=' + front.id + '&back=0&memberId=' + front.creatorMember;
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("success.");
                    return body;
                }).then(body => {
                    tester.get('/order/order/getOrderPages.json?pageNo=0&pageSize=10&code=' + front.code).end(function (err, res) {
                        var b = res.body;
                        expect(b.result.result.length).equal(0);
                        done();
                    });
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('后台删除订单', function (done) {
        var url = __path(__filename, 1);
        var params = 'ids=' + back.id + '&back=1';
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("success.");
                    return body;
                }).then(body => {
                    tester.get('/order/order/getOrderPages.json?pageNo=0&pageSize=10&code=' + back.code).end(function (err, res) {
                        var b = res.body;
                        expect(b.result.result.length).equal(0);
                        done();
                    });
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

});