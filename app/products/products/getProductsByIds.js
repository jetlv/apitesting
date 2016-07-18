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

describe('查询商品', function () {
    it('根据id查询商品', function (done) {
        var expected = { "msg": "操作成功", "code": "0", "pageNo": 1, "pageSize": 1, "totalCount": 1, "products": [{ "imgs": ["tb2015/tb201506/tb20150630/e81c8594-af52-4924-8810-451ab35e6a3b.jpg", "tb2015/tb201506/tb20150630/9276ae84-6925-4ce1-bfcf-f283cb6372e3.jpg", "tb2015/tb201506/tb20150630/9ecd580f-bca4-4f97-9d99-5ff7e471e190.jpg", "tb2015/tb201506/tb20150630/10b2c513-0543-4f61-85fa-3ffabf82fc0c.jpg"], "marketPrice": 100.99, "tied": 1, "productId": "528763", "productName_en": "Fashion Cotton Short Sleeves Mens Polo Shirt ", "pictureUrl": "tb2015/tb201506/tb20150630/e81c8594-af52-4924-8810-451ab35e6a3b.jpg", "independentDesign": 0, "productPictureType": 0, "categoryCode": "0000101499", "stars": 0, "productName": "Fashion Cotton Short Sleeves Mens Polo Shirt ", "customFlag": 0, "fastDelivery": 1, "stockOut": 0, "productCid": "11570528763", "review": 0, "haveVideo": 0, "additionalProducts": "453919 271086 525761 513253 386027 260226", "addedTime": "2015-07-01", "activator": 1, "productsParcels": "0", "productRecommend": 0, "productPrice": 19.99 }] };
        tester.get(__path() + 'productIds=528763&websiteId=1&languageCode=en-uk&activate=1&isSolr=1&deviceType=1')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                done();
            });
    });
});