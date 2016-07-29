//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7160
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
params         |          SetECParams         |          支付参数说明如下：<br>
      params.defalutEmail 设置PayPal默认登录帐号，可以为空;<br>
      params.localCode 2位国家代码，用于控制PayPal支付过程中页面语言，如US;<br>
      params.returnUrl 支付成功后返回的页面URL;<br>
      params.cancelUrl 支付过程中取消支付时返回的页面URL;<br>
      params.paymentType PayPal支付类型。STANDARD：生成订单后选择PayPal进行支付；EC:直接在购物车点PayPal进行支付;<br>
      params.viewType PayPal支付页面显示类型。WEBSITE:网页版进行支付；MOBILE:移动版进行支付;<br>
      params.currencyCode 3位货币代码，如USD。注意：paymentType为EC时此属性不能为null；;
      支付金额信息。注意：paymentType为STANDARD时此属性不能为null；<br>
          params.orderAmount.orderId 订单Id;<br>
          params.orderAmount.orderCid 订单编码;<br>
          params.orderAmount.productAmt 商品总金额;<br>
          params.orderAmount.shippingAmt 快递费金额;<br>
          params.orderAmount.insuranceAmt 运费险金额;<br>
          params.orderAmount.discountAmt 相关折扣金额;<br>
          params.orderAmount.totalAmt 支付总金额;<br>
          params.orderAmount.currencyCode 3位货币代码，如USD;<br>
      收货地址信息。注意：paymentType为STANDARD时此属性不能为null；<br>
          params.shippingAddress.firstName 名；<br>
          params.shippingAddress.middleName 可以为空；<br>
          params.shippingAddress.lastName 姓；<br>
          params.shippingAddress.countryCode 2位国家代码，如US;<br>
          params.shippingAddress.state 州或省;<br>
          params.shippingAddress.city 城市；<br>
          params.shippingAddress.street1 街道1；<br>
          params.shippingAddress.street2 街道2，可以为空；<br>
          params.shippingAddress.postcode 邮编；<br>
          params.shippingAddress.telephone 电话号码；<br>
          params.shippingAddress.gender 性别：1男2女；<br>
      params.websiteId Milanoo 站点Id，默认为主站;<br>
      params.languageCode Milanoo 站点语言编码，默认为en-uk;<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('PayPal支付流程第一步：开始结账。(用于第三方支付，如分销平台)', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/setExpressCheckout.htm?params.localCode=US&params.returnUrl=http://milanoo.kancart.com/paypalecreturn.php
  &params.cancelUrl=http://milanoo.kancart.com/paypaleccancel.php?type=order&params.paymentType=EC&params.viewType=WEBSITE';
       tester.get(__path(__filename) + 'params.localCode=US&params.returnUrl=http://milanoo.kancart.com/paypalecreturn.php
  &params.cancelUrl=http://milanoo.kancart.com/paypaleccancel.php')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});