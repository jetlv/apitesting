//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8077
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
langCode         |          String         |          语言，不能为空
categoryId         |          String         |          类目ID，不能为空
returnNum         |          String         |          返回个数，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据类目ID和站点查询相关类目', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productCategory/relatedCategory.htm?websiteId=1&langCode=en-uk&categoryId=392&returnNum=5';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&categoryId=392&returnNum=5')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});