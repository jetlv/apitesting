//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6106
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
langCode         |          String         |          语言编码， 不能为空
websiteId         |          String         |          站点ID，不能为空
productId         |          String         |          分类ID，不能为空
displayNum         |          Integer         |          展示数量，为空时默认为3

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('通过商品ID查询FAQ文章', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/help/getProblemsByProductId.htm?langCode=en-uk&websiteId=1&productId=12';
       tester.get(__path(__filename) + 'langCode=en-uk&websiteId=1&productId=12')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});