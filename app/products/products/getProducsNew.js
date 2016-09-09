/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe('新商品', function () {
    it('查询新到商品', function (done) {
        var expected = { "msg": "操作成功", "code": "0", "productResults": [{ "imgs": ["tb2015/tb201505/tb20150512/3cf60688-ebb7-4b1c-aebd-0b38977006b6.jpg", "tb2015/tb201505/tb20150512/c4a900b3-2c0a-4093-b007-ade193099e99.jpg", "tb2015/tb201505/tb20150512/92508758-ae6c-4062-b274-215a0992b035.jpg"], "marketPrice": 32, "tied": 1, "productId": "519847", "productName_en": "White and Black Open Back One Piece Bathing Suit ", "pictureUrl": "tb2015/tb201505/tb20150512/3cf60688-ebb7-4b1c-aebd-0b38977006b6.jpg", "independentDesign": 0, "productPictureType": 0, "categoryCode": "000000165900608", "stars": 0, "productName": "White and Black Open Back One Piece Bathing Suit ", "customFlag": 0, "fastDelivery": 1, "stockOut": 0, "productCid": "06060519847", "review": 0, "haveVideo": 0, "additionalProducts": "491779 515601 468763", "addedTime": "2015-05-13", "activator": 1, "productsParcels": "0", "productRecommend": 0, "productPrice": 15.99 }, { "imgs": ["tb2015/tb201505/tb20150512/c02c6d28-545c-4539-b8e2-4dd42ce83d68.jpg", "tb2015/tb201505/tb20150512/263cf012-e0d6-4823-b8ec-8957af697560.jpg", "tb2015/tb201505/tb20150512/2444dbc5-d536-40c8-9d07-bcc6a1791b9e.jpg"], "marketPrice": 32, "tied": 1, "productId": "519851", "productName_en": "Strappy Sexy Monokini Swimsuits ", "pictureUrl": "tb2015/tb201505/tb20150512/c02c6d28-545c-4539-b8e2-4dd42ce83d68.jpg", "independentDesign": 0, "productPictureType": 0, "categoryCode": "000000165900608", "stars": 5, "productName": "Strappy Sexy Monokini Swimsuits ", "customFlag": 0, "fastDelivery": 1, "stockOut": 0, "productCid": "06060519851", "review": 2, "haveVideo": 0, "additionalProducts": "515961 491779 515601 468763", "addedTime": "2015-05-13", "activator": 1, "productsParcels": "0", "productRecommend": 0, "productPrice": 15.99 }] };
        tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&productNum=2&deviceType=3')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                should.equal(res.body.code, "0", JSON.stringify(res.body));
                should.equal(res.body.msg, "操作成功", JSON.stringify(res.body));
                res.body.productResults.length.should.equal(2);
                done();
            });
    });
});