//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8175
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** [需求 #33262] PayPal快捷支付后绑定订单同原来的Milanoo帐户上**/


/**
参数名称         |          参数类型         |          参数说明
email         |          String         |          邮箱，不能为空
pw         |          String         |          密码，不能为空
websiteId         |          String         |          站点ID，非数字默认1
deviceType         |          String         |          终端类型，非数字默认1
loginIp         |          String         |          登陆IP，可以为空
langCode         |          String         |          语言，可以为空
orderId         |          Integer         |          绑定的订单Id，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('loginAndBindOrder', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/loginAndBindOrder.htm?email=milanoo_test@milanoo.com&pw=123456&websiteId=1&deviceType=1&loginIp=10.125.42.15&orderId=1';
       tester.get(__path(__filename) + 'email=milanoo_test@milanoo.com&pw=123456&websiteId=1&deviceType=1&loginIp=10.125.42.15&orderId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});