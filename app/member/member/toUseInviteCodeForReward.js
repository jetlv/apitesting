//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8509
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          
inviteCode         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('直接使用邀请码获取奖励 [需求 #36680]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/toUseInviteCodeForReward.htm?memberId=123&inviteCode=EBDE12D';
       tester.get(__path(__filename) + 'memberId=123&inviteCode=EBDE12D')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});