//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6133
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 确认收货**/


/**
参数名称         |          参数类型         |          参数说明
ordersId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('confirmReceipt', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/order/confirmReceipt.htm?ordersId=1565468';
       tester.get(__path(__filename) + 'ordersId=1565468')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});