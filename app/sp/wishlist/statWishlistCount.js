//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8101
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 统计商品被多少人收藏**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
langCode         |          String         |          语言，不能为空
productIds         |          String         |          商品ID，多个以“,”分开，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('statWishlistCount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/wishlist/statWishlistCount.htm?websiteId=1&langCode=en-uk&productIds=7464,413';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&productIds=7464,413')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});