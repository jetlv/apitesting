//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7306
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
params         |          DoCCPaymentParams         |          参数说明如下：<br>
      params.email 用户联系邮件；<br>
      params.ip 用户当前IP地址；<br>
      params.source 支付来源，APP;DISTRIBUTION：分销平台<br>
      // 信用卡卡号信息:<br>
      params.card.cardNo 卡号；<br>
      params.card.cardType 卡类型；<br>
      params.card.cardHolderName 持卡人姓名；<br>
      params.card.expiryYear 有效限截止年份；<br>
      params.card.expiryMonth 有效限截止月份；<br>
      params.card.cvc 安全码；<br>
      params.orderAmount.orderId 订单Id;<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('通过订单号进行信用卡支付，主要用于Mialnoo订单支付。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/creditCard/doPaymentByOrderId.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});