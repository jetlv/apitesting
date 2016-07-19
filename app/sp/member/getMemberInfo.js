/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var tester = supertest.agent('http://app.milanoo.com');

describe("获取用户信息", function () {
    it("常规验证", function (done) {
        tester
            .get(__path(__filename) + 'websiteIdLastView=1&id=3662865&websiteId=1&deviceType=5&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                should.equal(res.body.code, "0", JSON.stringify(res.body));
                should.equal(res.body.msg, "操作成功", JSON.stringify(res.body));
                res.body.member.WebsiteId.should.equal(1);
                res.body.member.MemberId.should.equal(3662865);
                res.body.member.MemberUserState.should.equal(1);
                res.body.member.MemberLang.should.equal('en-uk');
                res.body.member.MemberType.should.equal('Personal');
                res.body.member.MemberEmail.should.equal('getMemberInfoTester@milanoo.com');
                done();                
            });
    });
});
