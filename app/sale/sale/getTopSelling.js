//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6049
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          
languageCode         |          String         |          语言简写。 如 “en-uk”。
categoryId         |          Integer         |          分类id，为空时查询所有分类；
returnNum         |          Integer         |          返回促销商品的最多数量，默认为10；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据传入的参数返回相应的热销促销商品。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sale/sale/getTopSelling.htm?languageCode=en-uk&returnNum=10&categoryId=';
       tester.get(__path(__filename) + 'languageCode=en-uk&returnNum=10&categoryId=')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});