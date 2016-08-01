//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8102
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 删除wishlist**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
memberId         |          String         |          会员ID，与cookie不能同时为空
cookie         |          String         |          cookie，与memberId不能同时为空
productId         |          String         |          商品ID，不能为空，多个商品以逗号分隔 [需求 #31193]

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('removeWishlist', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/wishlist/removeWishlist.htm?websiteId=1&memberId=1&cookie=7464413&productId=64';
       tester.get(__path(__filename) + 'websiteId=1&memberId=1&cookie=7464413&productId=64')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});