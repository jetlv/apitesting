/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe("Wish List的获取", function () {
    it("常规验证", function (done) {
        tester
            .get(__path(__filename) + 'websiteId=1&memberId=3661799&sort=new&langCode=us')
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                should.equal(res.body.code, "0", JSON.stringify(res.body));
                done();
            });
    });
});
