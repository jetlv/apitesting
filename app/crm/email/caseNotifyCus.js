//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8155
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** Issue类型的Case告知顾客的邮件**/


/**
参数名称         |          参数类型         |          参数说明
crm         |          Crm         |          <pre>
      crm.memberId     根据memberId判断登陆和非登陆用户，memberId不为空时则为登陆
      crm.orderId      顾客的订单号，不能为空
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



describe('caseNotifyCus', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/email/caseNotifyCus.htm?crm.email=zhangsan@milanoo.com&crm.memberName=zhangsan&crm.websiteId=1&crm.languageCode=en-uk&crm.orderId=2213';
       tester.get(__path(__filename) + 'crm.email=zhangsan@milanoo.com&crm.memberName=zhangsan&crm.websiteId=1&crm.languageCode=en-uk&crm.orderId=2213')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});