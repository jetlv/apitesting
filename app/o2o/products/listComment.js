//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8088


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('接口说明查询商品的评论列表。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/products/listComment.htm?pc.productId=91010&pc.websiteId=1&pc.languageCode=en-uk&pc.pageSize=50&pc.pageNo=1&pc.sortObject=default';
       tester.get(__path(__filename) + 'pc.productId=91010&pc.websiteId=1&pc.languageCode=en-uk&pc.pageSize=50&pc.pageNo=1&pc.sortObject=default')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});