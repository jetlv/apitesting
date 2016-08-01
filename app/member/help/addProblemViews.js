//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6104
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 更新文章浏览次数**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          文章，不能为空。
langCode         |          String         |          语言简写，不能为空。
websiteId         |          String         |          站点ID，默认为1。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addProblemViews', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/help/addProblemViews.htm?id=165&langCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'id=165&langCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});