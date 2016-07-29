//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8370
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
commentId         |          Integer         |          评论或回复ID,不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('删除评论或者回复', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThreadComment/deleteComment.htm?commentId=11';
       tester.get(__path(__filename) + 'commentId=11')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});