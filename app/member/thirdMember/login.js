//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8117
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
m         |          ThirdMember         |          三方会员信息
 <pre>
  m.email: 不能为空
  m.websiteId: 不能为空
  m.lang: 不能为空
  m.deviceType: 可以为空
  m.source: 来源，不能为空，1paypal、2facebook
 </pre>
source         |          String         |          识别app来源，用于兼容ios老版本功能。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('三方会员登陆', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/thirdMember/login.htm?m.email=741301569338099@milanoo.com&m.websiteId=1&m.lang=en-uk&m.source=2';
       tester.get(__path(__filename) + 'm.email=741301569338099@milanoo.com&m.websiteId=1&m.lang=en-uk&m.source=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});