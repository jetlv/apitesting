//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7782
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** sns 添加广告、站点、视频任务**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('taskList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/member/taskList.htm?memberId=1';
       tester.get(__path(__filename) + 'memberId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});