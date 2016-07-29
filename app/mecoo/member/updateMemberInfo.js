//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8331
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
m         |          Member         |          参数说明
 <pre>
  m.memberId 会员ID，不能为空
  m.nickName 昵称
  m.sex 性别：0保密、1男、2女
  m.backgroundUrl 背景图片URL
  m.signature 个性签名
  m.areaId 地市ID
  m.avatarUrl 头像URL
  m.roleIds 二次元基因，角色ID，以,分隔
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('更新会员信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/member/updateMemberInfo.htm?m.memberId=123&m.nickName=TestFor';
       tester.get(__path(__filename) + 'm.memberId=123&m.nickName=TestFor')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});