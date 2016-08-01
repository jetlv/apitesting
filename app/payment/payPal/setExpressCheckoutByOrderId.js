//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7399
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** PayPal支付流程第一步：开始结账。**/


/**
参数名称         |          参数类型         |          参数说明
params         |          PayPalSetECParams         |          支付参数说明如下：<br>
      params.defalutEmail 设置PayPal默认登录帐号，可以为空;<br>
      params.localCode 2位国家代码，用于控制PayPal支付过程中页面语言，如US;<br>
      params.returnUrl 支付成功后返回的页面URL;<br>
      params.cancelUrl 支付过程中取消支付时返回的页面URL;<br>
      params.viewType PayPal支付页面显示类型。WEBSITE:网页版进行支付；MOBILE:移动版进行支付;<br>
      params.orderId 订单Id;<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('setExpressCheckoutByOrderId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/setExpressCheckoutByOrderId.htm?params.returnUrl=http://boss.milanoodeals.com/payment/payPal/ipnHandler.htm&params.cancelUrl=http://test.item.www.milanoo.com/shop/Payment-id-2146729.html&params.viewType=WEBSITE&params.orderId=2146729';
       tester.get(__path(__filename) + 'params.returnUrl=http://boss.milanoodeals.com/payment/payPal/ipnHandler.htm&params.cancelUrl=http://test.item.www.milanoo.com/shop/Payment-id-2146729.html&params.viewType=WEBSITE&params.orderId=2146729')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});