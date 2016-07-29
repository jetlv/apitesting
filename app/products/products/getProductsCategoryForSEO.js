//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6240
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          类目ID，不能为空
languageCode         |          String         |          语言简写，不能为空
websiteId         |          String         |          站点，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据传入的参数为SEO获取类目信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getProductsCategoryForSEO.htm?languageCode=en-uk&categoryId=391&websiteId=1&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&categoryId=391&websiteId=1&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});