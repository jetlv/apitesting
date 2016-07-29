//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7815
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cartId         |          Integer         |          购物车ID（下单后也是订单ID）， 不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sns下单', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/saveSnsOrderInfo.htm?cartId=9';
       tester.get(__path(__filename) + 'cartId=9')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});