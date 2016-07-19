/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe('购物车-新', function () {
    it('普通用户加入购物车', function (done) {
        var expected = { "msg": "操作成功", "code": "0", "cartIds": [51235299] };
        tester.get(__path(__filename) + 'p.cookieId=462dd7aab20f18067c81f2e14e83bc6b&p.memberId=3654861&p.priceUnit=USD&p.countryId=1&p.languageCode=en-uk&p.deviceType=1&p.websiteId=1&p.productsJson=[{%27productId%27:478847,%27buyNum%27:1,%27propertyVos%27:[{%27propertyId%27:360,%27propertyValue%27:%27Size01%27},{%27propertyId%27:769,%27propertyValue%27:%279488%27}],%27source%27:%27pc%27}]')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                done();
            });
    });
});