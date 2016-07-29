/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');

describe('商品详情', function () {

    it('基本验证', function (done) {

        // console.log(__path(__filename));
        var fullPath = 'http://app.milanoo.com/products/products/productDetails.htm?productId=385967&websiteId=1&languageCode=en-uk&deviceType=1&websiteIdLastView=1';
        tester.get(__path(__filename) + 'productId=385967&websiteId=1&languageCode=en-uk&deviceType=1&websiteIdLastView=1')
            .end(function (err, res) {
                expect(res.status).eql(200);
                expect(res.body.msg).eql('操作成功', fullPath);
                expect(res.body.code).eql('0', fullPath);
                expect(res.body.productDetails).to.be.ok;
                expect(res.body.productDetails.salesProperty).to.be.ok;
                expect(res.body.productDetails.productPropertyPictures).to.be.ok;
                expect(res.body.productDetails.productPropertyPictures.otherPicUrls.length).least(1);
                expect(res.body.productDetails.productCategory).to.be.ok;   
                done();

            });
    });
});