//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8357
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 关注或取消关注会员**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          当前登录会员ID，不可为空
followMemberId         |          Integer         |          关注或取消关注的会员ID，不可为空
action         |          Integer         |          类型：1为关注,2为取消关注，不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('memberFollow', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barMemberFollow/memberFollow.htm?memberId=3&followMemberId=4&action=1';
       tester.get(__path(__filename) + 'memberId=3&followMemberId=4&action=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});