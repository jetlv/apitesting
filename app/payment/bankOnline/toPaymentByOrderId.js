//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7497
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
params         |          BankOnlineParams         |          参数说明如下：<br>
            params.email 用户联系邮件；<br>
            params.ip 用户当前IP地址；<br>
            params.bankName 银行名称，只能是WEBMONEY,BOLETO,SOFORT,QIWI,YANDEXMONEY,MONETA；<br>
            params.source 支付来源，APP;DISTRIBUTION：分销平台；<br>
            params.orderId 订单Id；<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('通过订单Id进行银行在线方式支付第一步：返回支付的URL。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/bankOnline/toPaymentByOrderId.htm?params.email=123@milanoo.com&params.ip=127.0.0.1&params.bankName=WEBMONEY&params.source=APP&params.orderId=2146119';
       tester.get(__path(__filename) + 'params.email=123@milanoo.com&params.ip=127.0.0.1&params.bankName=WEBMONEY&params.source=APP&params.orderId=2146119')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});