//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7592
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 闪购活动之爆款商品**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
langCode         |          String         |          语言代码，不能为空
returnNum         |          String         |          取多少商品，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('saleHotProduct', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/flashsale/product/saleHotProduct.htm?websiteId=1&langCode=en-uk&returnNum=8';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&returnNum=8')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});