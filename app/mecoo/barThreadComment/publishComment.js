//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8369
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          当前登录会员ID,不可为空
snsId         |          Integer         |          分享的帖子ID,不可为空
parentId         |          Integer         |          上一级评论的ID
commentContent         |          String         |          评论内容,不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('评论回复', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThreadComment/publishComment.htm?userid=5&snsId=1&commentContent=评论一下';
       tester.get(__path(__filename) + 'userid=5&snsId=1&commentContent=评论一下')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});