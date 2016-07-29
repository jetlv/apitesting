//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8153
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
crm         |          Crm         |          参数说明如下
  <pre>
      crm.memberId     根据memberId判断登陆和非登陆用户，memberId不为空时则为登陆
      crm.caseId       caseId不能同时为空
      crm.caseType     CASE类型 1售前 2售后 3RMA 4issue //[需求 #36213]
      crm.email        顾客的email，不能为空
      crm.memeberName  顾客的姓名 ，不能为空
      crm.websiteId    站点，不能为空，数字
      crm.languageCode 语言代码，不能为空
  </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('crm邮件 提示顾客有新动态邮件模板', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/email/newReplayForCase.htm?crm.email=zhangsan@milanoo.com&crm.memberName=zhangsan&crm.websiteId=1&crm.languageCode=en-uk&crm.caseId=2213&crm.memberId=2133';
       tester.get(__path(__filename) + 'crm.email=zhangsan@milanoo.com&crm.memberName=zhangsan&crm.websiteId=1&crm.languageCode=en-uk&crm.caseId=2213&crm.memberId=2133')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});