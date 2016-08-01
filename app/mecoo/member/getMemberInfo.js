//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8411
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询会员详细信息**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          
deviceType         |          Integer         |          默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getMemberInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/member/getMemberInfo.htm?memberId=123&deviceType=1';
       tester.get(__path(__filename) + 'memberId=123&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});