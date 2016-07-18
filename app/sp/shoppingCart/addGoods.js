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

describe('购物车-老', function () {
    it('普通用户加入购物车', function (done) {
        var expected = {
            msg: "操作成功",
            code: "0"
        }
        tester.get(__path() + 'cookieId=462dd7aab20f18067c81f2e14e83bc6b&memberId=3654851&productId=446245&buyNum=1&inventoryPropertyArr=[{"propertyId":360,"propertyValue":"Size01"},{"propertyId":769,"propertyValue":"Deep%20Blue"}]&countryId=1&websiteId=1&source=old&priceUnit=USD&languageCode=en-uk')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                done();
            });
    });
});