/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var tester = supertest.agent('http://app.milanoo.com');

describe("获取用户特权信息", function () {
    it("初级用户特权", function (done) {
        //特权规则有可能会调整的，不过先验到起，后面再看看
        var expected = {
            "msg": "操作成功",
            "levelInfo": {
                "nextLevelId": 1,
                "score": 0,
                "minScore": 0,
                "needScore": 399,
                "levelId": 0,
                "maxScore": 399,
                "memberId": 3790289
            },
            "code": "0",
            "privilegeList": [{
                "qa": "<div class=\\\"text\\\" id=\\\"u47\\\">\r\n\t<p>\r\n\t\t&nbsp;<\/p>\r\n<\/div>\r\n<span style=\\\"font-size:12px;\\\">Q:What&rsquo;s the period of validity for birthday coupon?<br />\r\nA:Birthday coupon is available within the birthday month.<br />\r\n<br />\r\nQ:If I have applied birthday coupon,can I also apply other coupon?<br />\r\nA:Yes,it&rsquo;s available.<\/span><br />",
                "image": "2016/201607/20160705/BA86F1DC7F00000168BEFCBAA2D74750.jpg",
                "privilegeId": 1,
                "effectiveTime": "有效时间生日特权",
                "objects": "权益对象生日特权",
                "keyName": "birthday",
                "name": "Brithday discount",
                "description": "<span style=\\\"font-size:12px;\\\">Birthday coupon is available for Milanoo members.Acquire the coupon on first day of your birthday month.<\/span><br />",
                "content": "权益内容生日特权"
            }]
        }
        tester
            .get(__path(__filename) + 'memberId=3790289&languageCode=en-uk&websiteId=1&deviceType=1&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                    done();
            });
    });
});
