//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7349
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过订单号进行信用卡支付，主要用于Mialnoo订单支付。**/


/**
参数名称         |          参数类型         |          参数说明
params         |          CreditCardParams         |          参数说明如下：<br>
      params.email 用户联系邮件，不传默认使用订单中邮件地址；<br>
      params.ip 用户当前IP地址；<br>
      params.source 支付来源，APP;DISTRIBUTION：分销平台<br>
      params.orderId 订单Id;<br>
      // 信用卡卡号信息:<br>
      params.card.cardNo 卡号；<br>
      params.card.cardType 卡类型；<br>
      params.card.cardHolderName 持卡人姓名；<br>
      params.card.expiryYear 有效限截止年份；<br>
      params.card.expiryMonth 有效限截止月份；<br>
      params.card.cvc 安全码；<br>
      params.deviceFingerprintID 设备指纹<br>
      params.deviceType

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('doPaymentByOrderId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/creditCard/doPaymentByOrderId.htm?params.email=test@milanoo.com&params.ip=192.168.6.41&params.orderId=123&params.source=APP&params.card.cardNo=5100080000000000&params.card.cardType=Mastercard&params.card.cardHolderName=chenbo&params.card.expiryYear=2014&params.card.expiryMonth=12&params.card.cvc=456&params.deviceFingerprintID=test01010';
       tester.get(__path(__filename) + 'params.email=test@milanoo.com&params.ip=192.168.6.41&params.orderId=123&params.source=APP&params.card.cardNo=5100080000000000&params.card.cardType=Mastercard&params.card.cardHolderName=chenbo&params.card.expiryYear=2014&params.card.expiryMonth=12&params.card.cvc=456&params.deviceFingerprintID=test01010')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});