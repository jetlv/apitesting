//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6221
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productsId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/supplierProduct/getStatusByProductsId.htm?productsId=199960';
       tester.get(__path(__filename) + 'productsId=199960')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});