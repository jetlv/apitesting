//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6230
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
categoryId         |          String         |          商品分类ID，为空或者0查询全部
languageCode         |          String         |          语言编码，不能为空。
returnNum         |          String         |          返回结果数量

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据传入的参数返回相应的热销商品', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getProductTopSelling.htm?websiteId=1&categoryId=391&languageCode=en-uk&reutrnNum=10';
       tester.get(__path(__filename) + 'websiteId=1&categoryId=391&languageCode=en-uk&reutrnNum=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});