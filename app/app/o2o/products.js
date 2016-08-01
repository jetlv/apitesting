//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8088
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询商品的评论列表。**/


/**
参数名称         |          参数类型         |          参数说明
pc         |          ProductComment         |          
deviceType         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('products', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/o2o/products/listComment.htm?pc.productId=91010&pc.websiteId=1&pc.languageCode=en-uk&pc.pageSize=50&pc.pageNo=1&pc.sortObject=default';
       tester.get(__path(__filename) + 'pc.productId=91010&pc.websiteId=1&pc.languageCode=en-uk&pc.pageSize=50&pc.pageNo=1&pc.sortObject=default')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});