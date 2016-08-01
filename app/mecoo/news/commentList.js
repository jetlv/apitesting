//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8338
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取头条评论列表**/


/**
参数名称         |          参数类型         |          参数说明
newsId         |          Integer         |          头条ID，不能为空
memberId         |          Integer         |          会员ID，登录后不能为空
pageSize         |          Integer         |          不能为空
pageNo         |          Integer         |          不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('commentList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/news/commentList.htm?newsId=1&memberId=3&pageSize=10&pageNo=1';
       tester.get(__path(__filename) + 'newsId=1&memberId=3&pageSize=10&pageNo=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});