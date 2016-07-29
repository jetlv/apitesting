//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6101
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
langCode         |          String         |          语言简写，不能为空。
websiteId         |          String         |          站点ID，不能为空
homeNum         |          String         |          首页置顶文章数量，不能为空
categoryNum         |          String         |          各一级类目置顶文章数量，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('帮助中心首页置顶文章列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/help/homeUpProblems.htm?langCode=en-uk&websiteId=1&homeNum=3&categoryNum=2';
       tester.get(__path(__filename) + 'langCode=en-uk&websiteId=1&homeNum=3&categoryNum=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});