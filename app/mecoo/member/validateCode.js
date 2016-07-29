//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8403
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
phone         |          String         |          
code         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('验证短信验证码是否正确', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/member/validateCode?phone=138****&code=8888';
       tester.get(__path(__filename) + 'phone=138****&code=8888')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});