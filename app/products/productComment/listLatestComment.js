/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var expect = require('chai').expect;
var deep = require('deep-diff')
var observableDiff = require('deep-diff').observableDiff;

var tester = supertest.agent(CONST.APP_ADDRESS);

describe('近期商品评论', function () {
    it('获取米兰主站的最新评论', function (done) {
        tester.get(__path(__filename) + 'languageCode=en-uk&websiteId=1&deviceType=1&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                expect(res.status).eql(200);
                expect(res.body.code).eql("0");
                expect(res.body.msg).eql("操作成功");
                expect(res.body.listResults.length).least(1);
                done();
            });
    });
});