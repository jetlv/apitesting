//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8096
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
langCode         |          String         |          语言编码，不能为空
deviceType         |          String         |          终端类型，不能为空
memberId         |          String         |          会员ID，与cookie不能同时为空
cookie         |          String         |          cookie，与memberId不能同时为空
productId         |          String         |          商品ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('添加wishlist', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/wishlist/addWishlist.htm?websiteId=1&langCode=en-uk&deviceType=1&memberId=1&cookie=7464413&productId=64';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&deviceType=1&memberId=1&cookie=7464413&productId=64')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});