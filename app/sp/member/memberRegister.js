//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5999
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** Milanoo会员注册，正常注册发邮件并送礼券**/


/**
参数名称         |          参数类型         |          参数说明
member         |          Member         |          会员信息
 <pre>
  member.email 不能为空
  member.userPass 不能为空
  member.lang 不能为空
  member.websiteId 默认为1
  member.deviceType 默认为1
  member.source 会员来源；0：milanoo；默认为0，第三登录注册接口另见：member/thirdMember/login.htm
  member.promotionURL 推广链接
  member.publisherId 联盟的publisher id
  member.inviteCode 邀请码 （注意：如同时传递了member.invitor参数，则member.invitor参数无效）-> [需求 #36178]
  member.invitedId 邀请Id
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('memberRegister', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/member/memberRegister.htm?member.email=abc@milanoo.com&member.userPass=123456&member.lang=en-uk&member.inviteCode=1dcd650f6&member.invitedId=1';
       tester.get(__path(__filename) + 'member.email=abc@milanoo.com&member.userPass=123456&member.lang=en-uk&member.inviteCode=1dcd650f6&member.invitedId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});