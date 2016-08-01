//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6130
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** my account 部分我的订单中未评论的商品**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          
languageCode         |          String         |          
searchContent         |          String         |          
ordersEstate         |          String         |          
pageNo         |          String         |          
pageSize         |          String         |          
websiteId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getFavorites', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/favorites/getFavorites.htm?memberId=2105243&languageCode=en-uk&websiteId=3&searchContent=&ordersEstate=&pageNo=1&pageSize=8';
       tester.get(__path(__filename) + 'memberId=2105243&languageCode=en-uk&websiteId=3&searchContent=&ordersEstate=&pageNo=1&pageSize=8')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});