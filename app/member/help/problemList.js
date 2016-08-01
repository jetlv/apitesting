//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6102
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 帮助中心文章列表**/


/**
参数名称         |          参数类型         |          参数说明
langCode         |          String         |          语言简写，不能为空。
websiteId         |          String         |          站点ID，不能为空
classIds         |          String         |          指定要查询的分类（不包含子分类），如果为0，查询全部分类（包含子分类），不能为空。多个以","分开
keyword         |          String         |          关键词，只在标签或者标题中搜索
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('problemList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/help/problemList.htm?langCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'langCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});