//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8313
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 评论回复**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          当前登录会员ID,不可为空
threadId         |          Integer         |          楼主发的帖子ID,不可为空
threadCommentId         |          Integer         |          针对评论的回复ID,此值不为空时,replyMemberId可以为空
replyMemberId         |          Integer         |          被回复的会员ID,此值不为空时,threadCommentId也不能为空
commentContent         |          String         |          评论或回复内容,不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addThreadComment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/threadComment/addThreadComment.htm?memberId=5&threadId=1&commentContent=reply test';
       tester.get(__path(__filename) + 'memberId=5&threadId=1&commentContent=reply test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});