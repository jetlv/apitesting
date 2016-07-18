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

describe('邀请朋友礼券', function () {
    it('获取邀请朋友的礼券信息', function (done) {
        var expected = { "msg": "操作成功", "code": "0", "inviteDiscount": 15, "list": [{ "promotionKey": "", "shopSum": 1, "superposition": 0, "against": "Orders", "num": 1, "discountDesc": "1.Both you and your invited friend could get a voucher of $15, available for any items.\r\n2.The voucher is available once your friend have their account registered.\r\n3.It’s up to you who could be invited   \r\n4.One order accepts single voucher only.", "autoUsed": 1, "effective": 0, "rangeStartTime": -1, "websiteId": 1, "rate": 0, "couponType": 1, "countryIds": "", "rangeTime": -1, "id": 12939, "priceDis": 0, "firstPay": 0, "price2use": 0, "rangeLumpSum": "59|-1", "rangeType": 1, "outOfDate": false, "disDate2use": 0, "discountWay": "1", "ceremonyId": 0, "discountData": "15", "discountLang": "en-uk", "num2use": 0, "disWay2use": 0, "name": "REFERFRIENDS", "libkey": "", "currencyCode": "USD", "status": 0 }], "currencyCode": "USD" };
        tester.get(__path() + 'websiteId=1&languageCode=en-uk')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                // res.body.msg.should.equal('操作成功');
                // res.body.code.should.equal('0');
                // res.body.inviteDiscount.should.equal(15);
                // res.body.list.length.should.equal(1);
                // res.body.list[0].against.should.equal('Orders');
                // res.body.list[0].autoUsed.should.equal(1);
                // res.body.list[0].rangeStartTime.should.equal(-1);
                done();
            });
    });
});