//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6123
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 增加会员收藏信息**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
productId         |          String         |          商品ID，不能为空
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addFavorites', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/favorites/addFavorites.htm?memberId=2105243&productId=218142&websiteId=1';
       tester.get(__path(__filename) + 'memberId=2105243&productId=218142&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});