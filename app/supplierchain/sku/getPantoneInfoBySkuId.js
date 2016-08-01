//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6069
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据skuId得到潘通色卡相关信息**/


/**
参数名称         |          参数类型         |          参数说明
skuId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPantoneInfoBySkuId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/sku/getPantoneInfoBySkuId.json?skuId=36888309';
       tester.get(__path(__filename) + 'skuId=36888309')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});