//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8339
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 用户对一评论进行点赞**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID，不能为空
commentId         |          Integer         |          评论ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('like', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/news/like.htm?memberId=3&commentId=1';
       tester.get(__path(__filename) + 'memberId=3&commentId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});