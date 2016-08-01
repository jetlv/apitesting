//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8337
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 对头条进行评论**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          不能为空
newsId         |          Integer         |          不能为空
content         |          String         |          不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('comment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/news/comment.htm?memberId=3&newsId=1&content=test';
       tester.get(__path(__filename) + 'memberId=3&newsId=1&content=test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});