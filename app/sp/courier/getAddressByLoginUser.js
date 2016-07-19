/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var tester = supertest.agent('http://app.milanoo.com');

describe("地址薄", function () {
    it("根据用户id获取地址薄信息", function (done) {
        var expected = {
            "msg": "操作成功",
            "address": [{
                "consigneeEmail": "",
                "consigneeAddr": "Linked role street|",
                "consigneeName": "Santa|Luis",
                "consigneeNameJa": "|",
                "addressSource": 0,
                "consigneeStateId": 23,
                "memberUrbanAreas": "Paris",
                "consigneePostalcode": "003558",
                "consigneeGender": 1,
                "consigneePhone": "+33 2845412-535",
                "id": 2771149,
                "consigneeCity": "Paris",
                "defaultAddress": 2,
                "memberId": 3790289
            }],
            "code": "0"
        }
        tester
            .get(__path(__filename) + 'memberId=3790289&websiteId=1&deviceType=1&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                done();
            });
    });
});
