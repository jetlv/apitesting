//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6266
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，默认为1
languageCode         |          String         |          语言Code
categoryId         |          String         |          类目ID，可以有多个，以“,”分开
isHomePage         |          Integer         |          是否是首页调用，0代表不是，1代表是,默认为0

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询具有最新评论的商品及评论信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/listLatestCommentProduct.htm?websiteId=1&languageCode=en-uk&categoryId=&isHomePage=1';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&categoryId=&isHomePage=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});