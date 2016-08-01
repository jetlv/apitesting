//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6249
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 搜索类目**/


/**
参数名称         |          参数类型         |          参数说明
keyword         |          String         |          关键词。
categoryId         |          String         |          类目ID，如果不为空，在指定的目录下进行搜索，包含子目录
langCode         |          String         |          语言编码，不能为空。
websiteId         |          String         |          站点标志，不能为空。
activate         |          String         |          是否激活，null：查询全部，0：激活；1：未激活

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('searchProductsCategory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productCategory/searchProductsCategory.htm?keyword=dress&categoryId=391&langCode=en-uk&websiteId=1&activate=0';
       tester.get(__path(__filename) + 'keyword=dress&categoryId=391&langCode=en-uk&websiteId=1&activate=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});