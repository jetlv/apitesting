//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6131
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 保存离线支付**/


/**
参数名称         |          参数类型         |          参数说明
po         |          OrdersPayOffline         |          离线支付对象

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('savePayOffline', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/order/savePayOffline.htm?po.ordersId=14567&po.payType=offline';
       tester.get(__path(__filename) + 'po.ordersId=14567&po.payType=offline')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});