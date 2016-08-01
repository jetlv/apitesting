//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8512
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 得到不满足清仓规则的商品ID-根据商品SKU库存信息判断**/


/**

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findProductsIdNotFittedCrearenceBySku', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/findProductsIdNotFittedCrearenceBySku.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
}, 50000);
});