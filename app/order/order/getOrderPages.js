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

describe('Nileoo订单查询', function () {
    var order;
    var mhelper = supertest.agent(CONST.MHELPER_ADDRESS);

    it('构造一个订单', function (done) {
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
                    order = body.order;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + CONST.MHELPER_ADDRESS + url + params + '\r\n\r\n' + 'Actual output: ' + (res ? JSON.stringify(res.body) : '') + '\r\n');
                });
            });
    });

    it('不设置查询条件', function (done) {
        var url = __path(__filename, 1);
        var params = 'memberId=1&pageNo=1&pageSize=10';
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).most(10);
                    return body;
                }).then(body => {
                    if (body.result.result.length > 0) {
                        var item = body.result.result[0];
                        expect(item.id).greaterThan(0);
                        expect(item.delivery).not.null;
                        expect(item.postCode).not.null;
                        expect(item.phone).not.null;
                    }
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('根据code查询', function (done) {
        var code = order.code;
        var url = __path(__filename, 1);
        var params = 'memberId=1&pageNo=1&pageSize=10&code=' + code;
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).equal(1);
                    return body;
                }).then(body => {
                    if (body.result.result.length > 0) {
                        var item = body.result.result[0];
                        expect(item.code).equal(code);
                    }
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('根据物流公司查询', function (done) {
        var delivery = 'Fedex';
        var url = __path(__filename, 1);
        var params = 'memberId=1&pageNo=1&pageSize=10&delivery=' + delivery;
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).most(10);
                    return body;
                }).then(body => {
                    if (body.result.result.length > 0) {
                        var item = body.result.result[0];
                        expect(item.delivery).equal(delivery);
                    }
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('根据hasPrint查询', function (done) {
        var hasPrint = 0;
        var url = __path(__filename, 1);
        var params = 'memberId=1&pageNo=1&pageSize=10&hasPrint=' + hasPrint;
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).most(10);
                    return body;
                }).then(body => {
                    if (body.result.result.length > 0) {
                        var item = body.result.result[0];
                        expect(item.hasPrint).equal(hasPrint);
                    }
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('根据orderNumber查询', function (done) {
        var orderNumber = order.orderNumber;
        var url = __path(__filename, 1);
        var params = 'memberId=1&pageNo=1&pageSize=10&orderNumber=' + orderNumber;
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).least(1);
                    expect(body.result.result[0].orderNumber).equal(orderNumber);
                    return body;
                }).then(body => {
                    if (body.result.result.length > 0) {
                        var item = body.result.result[0];
                        expect(item.orderNumber).equal(orderNumber);
                    }
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('根据memberId查询', function (done) {
        var memberId = 1;
        var url = __path(__filename, 1);
        var params = 'pageNo=1&pageSize=10&memberId=' + memberId;
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).least(1);
                    return body;
                }).then(body => {
                    if (body.result.result.length > 0) {
                        var item = body.result.result[0];
                        expect(item.creatorMember).equal(memberId);
                    }
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('综合查询', function (done) {
        var url = __path(__filename, 1);
        var params = 'pageNo=1&pageSize=10&delivery=Fedex&hasPrint=0&createTimeGe=2016-01-01&createTimeLe=2016-12-30&orderNumber=' + order.orderNumber + '&memberId=1&code=' + order.code;
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
                    return body;
                }).then(body => {
                    expect(body.result.result.length).least(1);
                    return body;
                }).then(body => {
                    done();
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});
