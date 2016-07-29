//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6203
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1
productId         |          String         |          商品ID，不能为空
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”
returnNum         |          String         |          返回推荐商品数量

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('可能会购买产品推荐', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productRecommend/mayPurchaseRecommend.htm?productId=243180&returnNum=12&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'productId=243180&returnNum=12&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});