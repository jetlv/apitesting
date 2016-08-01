//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8458
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据skuId或skuCode得到sku相关信息**/


/**
参数名称         |          参数类型         |          参数说明
skuId         |          String         |          查询sku信息的sku Id串. 注：多个用@分开，如1111@22222@33333@44444
langId         |          Integer         |          语言Id，为空时默认为中文
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getSkuInfoBySkuIdOrSkuCode', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/sku/getSkuInfoBySkuIdOrSkuCode.json?skuId=36888291';
       tester.get(__path(__filename) + 'skuId=36888291')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});