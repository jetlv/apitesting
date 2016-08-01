//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5967
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询栏目文章列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点标志，为空默认1。
languageCode         |          String         |          语言编码，不能为空。
categoryId         |          String         |          栏目ID，不能为空。
pageNo         |          String         |          第几页，默认为1。
pageSize         |          String         |          每页几条记录，默认24。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('categoryArticles', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/article/article/categoryArticles.htm?websiteId=1&languageCode=en-uk&categoryId=1&pageNo=1&pageSize=24';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&categoryId=1&pageNo=1&pageSize=24')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});