//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8028
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
ipn         |          MQIpn         |          参数说明 ipn.paymentModuleCode:支付方式 PalPal、Worldpay、Checkout等; ipn.message IPN 信息

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('[需求 #26770] 发送IPN信息到新订单系统', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/sentIpn.htm?ipn.paymentModuleCode=PalPal&ipn.message=test';
       tester.get(__path(__filename) + 'ipn.paymentModuleCode=PalPal&ipn.message=test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});