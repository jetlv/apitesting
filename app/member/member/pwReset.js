//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6097
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
url         |          String         |          重置链接参数
websiteId         |          String         |          站点ID
pwNew         |          String         |          新密码
langCode         |          String         |          语言编码

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('会员密码重置', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/pwReset.htm?url=changewordset&websiteId=1&pwNew=123456&langCode=en-uk';
       tester.get(__path(__filename) + 'url=changewordset&websiteId=1&pwNew=123456&langCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});