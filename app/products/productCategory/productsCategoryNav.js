//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6248
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          类目ID，不能为空。
langCode         |          String         |          语言编码，不能为空。
websiteId         |          String         |          站点标志，不能为空。
activate         |          String         |          是否激活，null：查询全部，0：激活；1：未激活

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询类目信息，面包屑', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productCategory/productsCategoryNav.htm?categoryId=391&langCode=en-uk&websiteId=1&activate=0';
       tester.get(__path(__filename) + 'categoryId=391&langCode=en-uk&websiteId=1&activate=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});