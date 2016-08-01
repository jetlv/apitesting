//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7162
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** PayPal支付流程第三步：获取付款。(用于第三方支付，如分销平台)**/


/**
参数名称         |          参数类型         |          参数说明
params         |          DoECParams         |          参数说明：
      params.token;<br>
      params.payerId;<br>
      params.source 支付来源，APP;DISTRIBUTION：分销平台<br>
      支付金额信息:(STANDARD：不需要传递；EC:必须传递;)<br>
          params.orderAmount.orderId 订单Id;<br>
          params.orderAmount.orderCid 订单编码;<br>
          params.orderAmount.productAmt 商品总金额;<br>
          params.orderAmount.shippingAmt 快递费金额;<br>
          params.orderAmount.insuranceAmt 运费险金额;<br>
          params.orderAmount.discountAmt 相关折扣金额;<br>
          params.orderAmount.totalAmt 支付总金额;<br>
          params.orderAmount.currencyCode 3位货币代码，如USD;<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('doExpressCheckoutPayment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/doExpressCheckoutPayment.htm?params.token=EC-6LL00162N8663593S&params.payerId=SNJ2ZT343ZCBW&params.source=DISTRIBUTION&params.orderAmount.orderId=123';
       tester.get(__path(__filename) + 'params.token=EC-6LL00162N8663593S&params.payerId=SNJ2ZT343ZCBW&params.source=DISTRIBUTION&params.orderAmount.orderId=123')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});