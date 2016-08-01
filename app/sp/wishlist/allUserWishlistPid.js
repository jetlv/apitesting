//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8105
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询用户所有的wishlist的商品ID**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
langCode         |          String         |          语言，不能为空
memberId         |          String         |          会员ID，与cookie不能同时为空
cookie         |          String         |          cookie，与memberId不能同时为空
sort         |          String         |          排序，支持：new：按wishlist添加时间倒序排；
num         |          String         |          返回多少个

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('allUserWishlistPid', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/wishlist/allUserWishlistPid.htm?websiteId=1&langCode=en-uk&memberId=1&cookie=7464413';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&memberId=1&cookie=7464413')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});