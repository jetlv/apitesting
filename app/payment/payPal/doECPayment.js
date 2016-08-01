//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7418
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** PayPal支付流程第三步：获取付款。（用于Milanoo内部订单支付）**/


/**
参数名称         |          参数类型         |          参数说明
params         |          PayPalDoECParams         |          参数说明：
      params.token 不能为空;<br>
      params.payerId 不能为空;<br>
      params.source 支付来源，APP；DISTRIBUTION:分销平台;<br>
      params.orderId 订单Id，EC支付时订单Id不能为null;<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('doECPayment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/doECPayment.htm?params.token=EC-feere343&params.payerId=123test&params.source=APP&params.orderId=2146729';
       tester.get(__path(__filename) + 'params.token=EC-feere343&params.payerId=123test&params.source=APP&params.orderId=2146729')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});