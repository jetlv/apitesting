/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var chai = require('chai');
var expect = chai.expect;

var tester = supertest.agent(CONST.APP_ADDRESS);

describe('获取类目', function () {
    it('接口是否在正常工作', function (done) {

        tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&deviceType=1&active=1&level=1&leftLevel=2&rightLevel=1')
            .expect(200)
            .end(function (err, res) {
                expect(res.status).to.equal(200);
                expect(res.body.msg).to.equal("操作成功");
                expect(res.body.categories.length).least(1);
                done();
            });
    });
});