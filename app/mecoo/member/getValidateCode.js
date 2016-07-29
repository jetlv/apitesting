//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8324
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
phone         |          String         |          手机号码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取短信验证码', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/member/getValidateCode.htm?phone=138****';
       tester.get(__path(__filename) + 'phone=138****')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});