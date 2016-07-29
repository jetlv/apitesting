//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8483
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
authCode         |          String         |          PayPal登录授权后获取的Code

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('PayPal登录授权第二步：授权成功获取PayPal个人信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/getUserInfo.htm?authCode=XYU8OYcUuUh3vQFD0XfBpW6trOx7S4Mnb9rgIFf6GQVVPlKzNY1w8GoJcyIFOjyz3DdguTG8ArCdT96SbIm7vR0GHaJxnxSGChVhxvptg-5wb2dOSsCV_-iOtaIwf0VNDT3nfLqDuNKyUiQzCUm71k6J5_dR9Prtl88JgosNQVszbZ2L';
       tester.get(__path(__filename) + 'authCode=XYU8OYcUuUh3vQFD0XfBpW6trOx7S4Mnb9rgIFf6GQVVPlKzNY1w8GoJcyIFOjyz3DdguTG8ArCdT96SbIm7vR0GHaJxnxSGChVhxvptg-5wb2dOSsCV_-iOtaIwf0VNDT3nfLqDuNKyUiQzCUm71k6J5_dR9Prtl88JgosNQVszbZ2L')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});