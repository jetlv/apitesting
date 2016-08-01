//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8350
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 用户关注套装**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID，不能为空
subjectId         |          Integer         |          套装ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('follow', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/subject/follow.htm?memberId=3&subjectId=1';
       tester.get(__path(__filename) + 'memberId=3&subjectId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});