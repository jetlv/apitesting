//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7498
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
json         |          String         |          <br>
 {"paymentSuccess":true,"feeAmt":1.05,"paymentDate":null,"amt":123.11,"currencyCode":"EUR","source":"APP","orderCid":"ru_mi_140312173202_605","paymentDate2":1398742898,"remarks":"","bankName":"WEBMONEY","uniqueReference":"test12323","orderId":2146119}

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('PHP实现支付时，在Return和IPN返回时处理后传回来进行相关业务处理。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/bankOnline/doPaymentForPhp.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});