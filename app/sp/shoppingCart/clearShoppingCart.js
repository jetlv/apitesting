//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6014
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cookieId         |          String         |          
memberId         |          String         |          
websiteId         |          Integer         |          
websiteIdLastView         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('清空购物车', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/shoppingCart/clearShoppingCart.htm?cookieId=9c814a9c4f6a6e99788975208c62f46e&memberId=&websiteId=1';
       tester.get(__path(__filename) + 'cookieId=9c814a9c4f6a6e99788975208c62f46e&memberId=&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});