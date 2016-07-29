//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8482
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
returnUrl         |          String         |          登录成功回调URL，注意：此URL要先在PayPal环境中绑定。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('PayPal登录授权第一步：获取授权登录界面URL', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/getRedirectUrl.htm?returnUrl=http://app.android.milanoo/return';
       tester.get(__path(__filename) + 'returnUrl=http://app.android.milanoo/return')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});