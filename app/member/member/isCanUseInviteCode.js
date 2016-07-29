//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8508
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('判断会员是否可以使用邀请码 [需求 #36680]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/isCanUseInviteCode.htm?memberId=123';
       tester.get(__path(__filename) + 'memberId=123')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});