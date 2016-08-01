//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7757
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** sns 用户登陆**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
email         |          String         |          邮箱，不能为空
pw         |          String         |          密码，不能为空
deviceType         |          String         |          终端类型
loginIp         |          String         |          登陆时的IP

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('login', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/member/login.htm?websiteId=1&languageCode=en-uk&email=test@test.com&pw=test&deviceType=1&loginIp=172.0.0.1';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&email=test@test.com&pw=test&deviceType=1&loginIp=172.0.0.1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});