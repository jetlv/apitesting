//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7161
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** PayPal支付流程第二步：返回客户信息。(用于第三方支付，如分销平台)**/


/**
参数名称         |          参数类型         |          参数说明
token         |          String         |          {@link PayPalController#setExpressCheckout(SetECParams)}接口返回的token。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getExpressCheckoutDetails', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/getExpressCheckoutDetails.htm?token=EC-6LL00162N8663593S';
       tester.get(__path(__filename) + 'token=EC-6LL00162N8663593S')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});