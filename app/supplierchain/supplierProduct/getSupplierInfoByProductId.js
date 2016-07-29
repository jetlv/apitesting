//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6053
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          商品id

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据商品ID得到供应信息列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/supplierProduct/getSupplierInfoByProductId.json?productId=394371';
       tester.get(__path(__filename) + 'productId=394371')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});