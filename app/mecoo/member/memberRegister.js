//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8327
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 会员注册**/


/**
参数名称         |          参数类型         |          参数说明
m         |          Member         |          参数说明
 <pre>
  m.phone 手机号码，不能为空
  m.password 密码，不能为空
  m.oauthId 第三方登录认证ID，第三方登录时不能空
  m.nickName 昵称，不能为空
  m.sex 性别：0保密、1男、2女，默认为0
  m.source 登录来源（0：milanoo；1：paypal；2：facebook；3：QQ；4：微信；5：微博 ），不能为空
  m.websiteId 站点ID，默认为9
  m.lang 语言编码，默认为cn-cn
  m.deviceType 设置类型，默认为1
  m.ip 注册IP，可以为空
 </pre>
code         |          String         |          短信验证码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('memberRegister', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/member/memberRegister.htm?m.phone=138***&m.password=123456&m.nickName=chepoo&m.source=0&m.ip=192.168.11.16&code=1615';
       tester.get(__path(__filename) + 'm.phone=138***&m.password=123456&m.nickName=chepoo&m.source=0&m.ip=192.168.11.16&code=1615')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});