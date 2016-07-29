//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7267
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
params         |          DoCCPaymentParams         |          参数说明如下：<br>
      params.email 用户联系邮件；<br>
      params.ip 用户当前IP地址；<br>
      // 信用卡卡号信息:<br>
          params.card.cardNo 卡号；<br>
          params.card.cardType 卡类型；<br>
          params.card.cardHolderName 持卡人姓名；<br>
          params.card.expiryYear 有效限截止年份；<br>
          params.card.expiryMonth 有效限截止月份；<br>
          params.card.cvc 安全码；<br>
      // 邮寄地址:<br>
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
      // 帐单地址:<br>
          params.billingAddress.firstName 名；<br>
          params.billingAddress.middleName 可以为空；<br>
          params.billingAddress.lastName 姓；<br>
          params.billingAddress.countryCode 2位国家代码，如US;<br>
          params.billingAddress.state 州或省;<br>
          params.billingAddress.city 城市；<br>
          params.billingAddress.street1 街道1；<br>
          params.billingAddress.street2 街道2，可以为空；<br>
          params.billingAddress.postcode 邮编；<br>
          params.billingAddress.telephone 电话号码；<br>
          params.billingAddress.gender 性别：1男2女；<br>
      // 订单金额:<br>
          params.orderAmount.orderId 订单Id;<br>
          params.orderAmount.orderCid 订单编码;<br>
          params.orderAmount.productAmt 商品总金额;<br>
          params.orderAmount.shippingAmt 快递费金额;<br>
          params.orderAmount.insuranceAmt 运费险金额;<br>
          params.orderAmount.discountAmt 相关折扣金额;<br>
          params.orderAmount.totalAmt 支付总金额;<br>
          params.orderAmount.currencyCode 3位货币代码，如USD;<br>
      params.source 支付来源，APP;DISTRIBUTION：分销平台<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('信用卡支付接口，主要用于第三方支付(如：分销平台)', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/creditCard/doPayment.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});