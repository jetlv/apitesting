//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7723
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取银行汇款referenceNumber。**/


/**
参数名称         |          参数类型         |          参数说明
params         |          BankTransferParams         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getReferenceNumber', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/bankTransfer/getReferenceNumber.htm?params.source=APP&params.orderId=123&params.countryCode=US';
       tester.get(__path(__filename) + 'params.source=APP&params.orderId=123&params.countryCode=US')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});