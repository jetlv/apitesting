//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6070
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          商品id串，以,分隔

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('通过商品查询非联动的sku信息。【需求 #21866 2】', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080//supplierchain/sku/getSkuProperties.json?productIds=406763,386371';
       tester.get(__path(__filename) + 'productIds=406763,386371')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});