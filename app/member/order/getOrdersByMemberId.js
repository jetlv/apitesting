/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var R = require('../../../req.js');
var expect = R.expect;
var observableDiff = R.observableDiff;

var tester = supertest.agent('http://app.milanoo.com');

describe('获取订单', function () {
    it('根据用户ID获取订单', function (done) {
        var expected = { "msg": "操作成功", "code": "0" };
        tester.get(__path(__filename) + 'websiteIdLastView=1&memberId=3662895&searchContent=&ordersEstate=0&type=&pageNo=1&pageSize=5&languageCode=en-uk&websiteIdFilter=&isComment=&websiteId=1&deviceType=5')
            .expect(200)
            .end(function (err, res) {
                observableDiff(expected, res.body, function (d) {
                    expect(d.kind, JSON.stringify(d).replace(/"/g, '\'')).to.not.equal('E');
                });
                done();
            });
    });
});