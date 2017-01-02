/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;
var util = R.util;

var env = CONST.NILEOO_ADDRESS_TESTENV;
var tester = supertest.agent(env);

var mhelper = supertest.agent(CONST.MHELPER_ADDRESS);


describe('Nileoo前台提交异常及解除异常', function () {
    before(function() {
        this.skip();
    });
    var remark = util.randomStr(8);
    var order;
    it('造一个订单', function (done) {
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
                    order = body.order.orderVo;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });


    it('验证能否正常提交', function (done) {
        var url = __path(__filename, 1);
        var params = 'orderId=' + order.id + '&abnormalReason=1&remark=' + remark + '&creatorMember=3';
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
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('验证是否保存成功了', function (done) {
        var url = __path(__filename, 1).replace('subAbnormal', 'getOrderDetail');
        var params = 'orderId=' + order.id + '&memberId=1' ;
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
                    var orderAbnormals = body.result.orderAbnormals;
                    var found = false;
                    orderAbnormals.forEach(function (item, index, array) {
                        if (item.remark === remark && item.dataStatus === 0) {
                            found = true;
                        }
                    });
                    expect(found).to.be.true;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('解除异常', function (done) {
        var url = __path(__filename, 1).replace('subAbnormal', 'subNormal');
        var params = 'orderIds=' + order.id;
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
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('验证是否解除异常', function (done) {
        var url = __path(__filename, 1).replace('subAbnormal', 'getOrderDetail');
        var params = 'orderId=' + order.id + '&memberId=1';
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
                    var orderAbnormals = body.result.orderAbnormals;
                    var found = false;
                    orderAbnormals.forEach(function (item, index, array) {
                        if (item.remark === remark && item.dataStatus === 1) {
                            found = true;
                        }
                    });
                    expect(found).to.be.true;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});
