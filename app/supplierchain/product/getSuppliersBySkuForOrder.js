//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6062
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
skuIds         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('此接口功能同getSuppliersBySku，只是返回结果为JSON的Object对象。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/product/getSuppliersBySkuForOrder.json?skuIds=36888307,36888291';
       tester.get(__path(__filename) + 'skuIds=36888307,36888291')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});