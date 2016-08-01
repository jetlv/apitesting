//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6301
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据条件从搜索引擎查询品牌列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          站点ID，不能为空
languageCode         |          String         |          语言简写，不能为空
categoryId         |          String         |          类目ID，不能为空, 为0时表示查询全部

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('statisticsBrandByCategory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/brand/statisticsBrandByCategory.htm?websiteId=3&languageCode=en-uk&categoryId=0';
       tester.get(__path(__filename) + 'websiteId=3&languageCode=en-uk&categoryId=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});