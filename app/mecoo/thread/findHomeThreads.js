//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8309
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID,不可为空
pageNo         |          Integer         |          默认为1
pageSize         |          Integer         |          默认为3

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('帖吧-讨论区首页', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/thread/findHomeThreads.htm?memberId=3&pageNo=1&pageSize=5';
       tester.get(__path(__filename) + 'memberId=3&pageNo=1&pageSize=5')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});