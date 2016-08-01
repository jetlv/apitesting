//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8157
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** Case关闭后邀请顾客参与Survey**/


/**
参数名称         |          参数类型         |          参数说明
crm         |          Crm         |          <pre>
      crm.email        顾客的email，不能为空
      crm.memeberName  顾客的姓名 ，不能为空
      crm.websiteId    站点，不能为空，数字
      crm.languageCode 语言代码，不能为空
      crm.memberId    会员id 为空时 则默认为0
      crm.caseId      php传的caseId,不能为空
  </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('inviteCustomerSur', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/email/inviteCustomerSur.htm?crm.email=zhangsan@milanoo.com&crm.memberId=123&crm.websiteId=1&crm.languageCode=en-uk&crm.caseId=122';
       tester.get(__path(__filename) + 'crm.email=zhangsan@milanoo.com&crm.memberId=123&crm.websiteId=1&crm.languageCode=en-uk&crm.caseId=122')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});