//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8320
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
threadCommentId         |          Integer         |          被回复的评论ID,不可为空
pageNo         |          Integer         |          当前页码
pageSize         |          Integer         |          每页纪录数

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('第一层评论下的回复列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/threadComment/findReplyLevelThreadComment.htm?threadCommentId=1&pageNo=1&pageSize=10';
       tester.get(__path(__filename) + 'threadCommentId=1&pageNo=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});