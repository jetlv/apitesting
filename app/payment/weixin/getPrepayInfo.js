//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8333
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
orderId         |          Integer         |          订单ID,不可为空
payMethod         |          Integer         |          支付方式,1为APP支付,2为NATIVE扫码支付

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获得预支付单信息-微信支付APP', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/weixin/getPrepayInfo.htm?orderId=1&payMethod=1';
       tester.get(__path(__filename) + 'orderId=1&payMethod=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});