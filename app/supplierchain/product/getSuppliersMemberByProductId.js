//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6059
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          商品id，不能为null
suppliersId         |          Integer         |          供应商id(只返回当前供应商对应的商品)

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据商品ID得到商品的供应商的信息（供应商名称，负责人，均价，状态)', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/product/getSuppliersMemberByProductId.htm?productId=1667&suppliersId=1386';
       tester.get(__path(__filename) + 'productId=1667&suppliersId=1386')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});