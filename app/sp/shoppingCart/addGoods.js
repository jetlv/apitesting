/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe('购物车-老', function () {
    it('普通用户加入购物车', function (done) {
        var expected = {
            msg: "操作成功",
            code: "0"
        }
        tester.get(__path(__filename) + 'cookieId=462dd7aab20f18067c81f2e14e83bc6b&memberId=3654851&productId=446245&buyNum=1&inventoryPropertyArr=[{"propertyId":360,"propertyValue":"size01985"},{"propertyId":769,"propertyValue":"Black4692"}]&countryId=1&websiteId=1&source=old&priceUnit=USD&languageCode=en-uk')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                done();
            });
    });
});