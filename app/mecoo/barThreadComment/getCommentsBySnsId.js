//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8371
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
snsId         |          Integer         |          分享的帖子ID
currentPage         |          Integer         |          当前页
pageSize         |          Integer         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据分享ID获取评论', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThreadComment/getCommentsBySnsId.htm?snsId=1&currentPage=1&pageSize=10';
       tester.get(__path(__filename) + 'snsId=1&currentPage=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});