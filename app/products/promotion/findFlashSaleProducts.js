/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var tester = supertest.agent('http://app.milanoo.com');
var expect = require('chai').expect;
var deep = require('deep-diff')
var observableDiff = require('deep-diff').observableDiff;
describe('闪购接口', function () {
    it('获取闪购商品', function (done) {
        var expected = {
            "msg": "操作成功",
            "code": "0",
            "featureSeo": "apparel daily sale, hot deals, discounted wholesale clothing",
            "countDownDays": 1,
            "isBeginning": 1,
            "featureDesc": "All daily apparel deals in Milanoo.com. Find the discounted apparel and clothing here and get what you need.",
            "list": [],
            "featureTitle": "Daily Madness!",
            "countDown": 1,
            "featureId": 106
        };
        tester.get(__path(__filename) + 'categoryNum=6&productNum=4&languageCode=en-uk&featureName=skin_60&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                observableDiff(expected, res.body, function(d) {
                    expect(d.kind, JSON.stringify(d).replace(/"/g, '\'')).to.not.equal('E');
                });
                expect(res.body.list[0].length).least(1);
                done();
            });
    });
});