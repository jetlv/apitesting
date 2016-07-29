//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6094
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID
oldPW         |          String         |          旧密码
newPW         |          String         |          新密码
langCode         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('修改会员密码', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/modifyMemberPW.htm?memberId=2105243&oldPW=123456&newPW=11111&langCode=en-uk';
       tester.get(__path(__filename) + 'memberId=2105243&oldPW=123456&newPW=11111&langCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});