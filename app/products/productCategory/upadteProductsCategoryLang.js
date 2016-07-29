//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6250
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          Integer         |          分类id
lang         |          String         |          语言简写，如：fr-fr,en-uk
keywordDesc         |          String         |          对应的关键字描述信息

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('更新关键字描述信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productCategory/upadteProductsCategoryLang.htm?categoryId=391&lang=en-uk&keywordDesc=wedding';
       tester.get(__path(__filename) + 'categoryId=391&lang=en-uk&keywordDesc=wedding')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});