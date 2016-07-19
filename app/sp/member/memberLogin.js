/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe('登录', function () {
    it('普通用户登录', function (done) {
        var expected = {
            msg: "操作成功",
            code: "0",
            userState: 1,
            inviteCode: "uew9j",
            id: 3701417,
            type: "Personal"
        };
        tester.get(__path(__filename) + 'email=memberLoginTester@milanoo.com&pw=123456&websiteId=1&deviceType=1&loginIp=10.125.42.15')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                done();
            });
    });
});