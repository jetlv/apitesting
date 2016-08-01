//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6265
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询商品的评论列表。**/


/**
参数名称         |          参数类型         |          参数说明
pc         |          ProductComment         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('listComment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/listComment.htm?pc.productId=243180&pc.websiteId=1&pc.languageCode=en-uk&pc.pageSize=3&pc.pageNo=1&pc.sortObject=default';
       tester.get(__path(__filename) + 'pc.productId=243180&pc.websiteId=1&pc.languageCode=en-uk&pc.pageSize=3&pc.pageNo=1&pc.sortObject=default')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});