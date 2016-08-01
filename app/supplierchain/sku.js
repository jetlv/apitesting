//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8465
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过商品查询非联动的sku信息。【需求 #21866 2】**/


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          商品id串，以,分隔
priceUnit         |          String         |          货币符号，对销售属性进行货币转换，站点9默认为RMB，其他站点默认为USD

 **/


/// <reference path="../../include.d.ts" />

var R = require('../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sku', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080//supplierchain/sku/getSkuProperties.json?productIds=406763,386371';
       tester.get(__path(__filename) + 'productIds=406763,386371')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});