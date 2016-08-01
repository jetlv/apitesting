//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6272
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 评论评价，评论是否有用**/


/**
参数名称         |          参数类型         |          参数说明
commentId         |          Integer         |          评论ID
helpFul         |          Integer         |          1:表示有用（helpful），0：表示无用（not helpful）

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('commentHelpFul', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/commentHelpFul.htm?commentId=964&helpFul=0';
       tester.get(__path(__filename) + 'commentId=964&helpFul=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});