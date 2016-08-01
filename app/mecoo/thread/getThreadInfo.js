//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8314
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据帖子ID得到帖子信息**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          当前登录的会员ID,不可为空
threadId         |          Integer         |          帖子ID,不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getThreadInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/thread/getThreadInfo.htm?threadId=8&memberId=3';
       tester.get(__path(__filename) + 'threadId=8&memberId=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});