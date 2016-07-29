//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5861
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
iPadId         |          Integer         |          iPad设置id，不能为空
userName         |          String         |          用户名，不能为空
email         |          String         |          邮件地址，不能为空
productIds         |          String         |          提交的商品Id串，如：3721,6021,6706，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('用户将iPad上的心愿商品POST到店员处。注意：存放到WishList的同时要存一份最新的数据到iPad设备对应的商品信息表。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/o2o/wishList/commitWishList.htm?iPadId=1&userName=chepoo&email=test@milanoo.com&productIds=3721,6021,6706';
       tester.get(__path(__filename) + 'iPadId=1&userName=chepoo&email=test@milanoo.com&productIds=3721,6021,6706')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});