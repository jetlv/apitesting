//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8470
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
in         |          MemberInvite         |          <pre>
 in.memberId 邀请会员ID，不能为空
 in.nickname 邀请会员呢称，可以为空
 in.emails 被邀请邮箱串，多个以,分隔，不能为空
 in.websiteId 站点ID，默认为1
 in.languageCode 语言编码，默认为en-uk
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('邮件方式邀请会员 [需求 #36178]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/inviteMember.htm?in.memberId=123&in.nickname=chepooo&in.emails=abc@milanoo.com,sbd@sina.com&in.websiteId=1&in.languageCode=en-uk';
       tester.get(__path(__filename) + 'in.memberId=123&in.nickname=chepooo&in.emails=abc@milanoo.com,sbd@sina.com&in.websiteId=1&in.languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});