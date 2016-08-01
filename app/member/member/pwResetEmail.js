//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6096
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 会员密码重置邮件**/


/**
参数名称         |          参数类型         |          参数说明
email         |          String         |          邮箱，不能为空
websiteId         |          String         |          站点ID，不能为空
lang         |          String         |          语言编码，不能为空
rootUrl         |          String         |          邮件中链接前缀，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('pwResetEmail', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/pwResetEmail.htm?email=test@milanoo.com&websiteId=1&lang=en-uk&rootUrl=www.milanoo.com';
       tester.get(__path(__filename) + 'email=test@milanoo.com&websiteId=1&lang=en-uk&rootUrl=www.milanoo.com')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});