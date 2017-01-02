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

describe('验证旧密码', function () {
    before(function() {
        this.skip();
    });
    it('验证成功', function (done) {
        var url = __path(__filename, 1);
        /** 一个已存在的专用用户id，若数据库有异动，直接修改本id(以及password)*/
        var buyerId = 53;
        var passowrd = '6557dd0b20bf5acfc56e15286839bfc1';
        var params = 'buyerId=' + buyerId + '&password=' + passowrd;
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
                    expect(body.result).is.true;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('验证失败', function (done) {
        var url = __path(__filename, 1);
        /** 一个已存在的专用用户id，若数据库有异动，直接修改本id(以及password)*/
        var buyerId = 53;
        var passowrd = 'wrongpassword';
        var params = 'buyerId=' + buyerId + '&password=' + passowrd;
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
                    expect(body.result).is.false;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

    it('空密码', function (done) {
        var url = __path(__filename, 1);
        /** 一个已存在的专用用户id，若数据库有异动，直接修改本id(以及password)*/
        var buyerId = 53;
        var passowrd = '';
        var params = 'buyerId=' + buyerId + '&password=' + passowrd;
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("password should not be null or empty");
                    return body;
                }).then(body => {
                    expect(body.code).equal("0");
                    expect(body.result).is.false;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });

});
