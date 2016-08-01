//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5937
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据商品Id获取供应商提供的商品的最大价格与最小价格**/


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          商品ID字符串，格式为id1,id2,id3....

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('supplyPrice', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/product/supplyPrice.htm?productIds=1874067,3579';
       tester.get(__path(__filename) + 'productIds=1874067,3579')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});