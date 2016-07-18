/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 */
function __path() {
    var sep = CONST['SEP_' + os.platform()];
    var fArray = __filename.split(sep);
    var path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    return path;
}

var tester = supertest.agent('http://app.milanoo.com');

describe('购物车-新', function () {
    it('普通用户加入购物车', function (done) {
        var expected = { "msg": "操作成功", "code": "0", "cartIds": [51235299] };
        tester.get(__path() + 'p.cookieId=462dd7aab20f18067c81f2e14e83bc6b&p.memberId=3654861&p.priceUnit=USD&p.countryId=1&p.languageCode=en-uk&p.deviceType=1&p.websiteId=1&p.productsJson=[{%27productId%27:478847,%27buyNum%27:1,%27propertyVos%27:[{%27propertyId%27:360,%27propertyValue%27:%27Size01%27},{%27propertyId%27:769,%27propertyValue%27:%279488%27}],%27source%27:%27pc%27}]')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                done();
            });
    });
});