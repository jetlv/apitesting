/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var observableDiff = require('deep-diff').observableDiff;
var chai = require('chai');
var expect = chai.expect;

var tester = supertest.agent('http://app.milanoo.com');

describe('用户综合信息', function () {
    it('查询Q&A,RMA数量以及礼券等数量', function (done) {
        var expected = {
            "otherMsg": {
                "qa": 0,
                "rma_isNew": 0,
                "advisory_isNew": 0,
                "advisory": 1,
                "complaints_isNew": 0,
                "review": 0,
                "rma": 0,
                "complaints": 0,
                "review_isNew": 0,
                "qa_isNew": 0
            },
            "msg": "操作成功",
            "orderMsg": {

            },
            "code": "0"
        };
        tester.get(__path(__filename) + 'memberId=3790289&langCode=en-uk&websiteId=1&deviceType=1&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                // console.log(res.body);
                expect(res.body.msg).eql('操作成功');
                observableDiff(expected, res.body , function (d) {
                    expect(d.kind, JSON.stringify(d).replace(/"/g, '\'')).to.not.equal('E');
                })
                done();
            });
    });
});