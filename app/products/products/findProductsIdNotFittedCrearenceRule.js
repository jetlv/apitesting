//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8479
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 得到不满足清仓规则的商品ID**/


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          格式如a,b,c,d 的商品id串

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findProductsIdNotFittedCrearenceRule', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/findProductsIdNotFittedCrearenceRule.htm?productIds=12312,1231,1698,4487';
       tester.get(__path(__filename) + 'productIds=12312,1231,1698,4487')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});