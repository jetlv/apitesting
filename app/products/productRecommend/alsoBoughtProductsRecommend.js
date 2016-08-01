//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6205
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** also bought 商品推荐**/


/**
参数名称         |          参数类型         |          参数说明
productId         |          String         |          当前正在浏览的商品ID，不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点ID，默认为1
returnNum         |          String         |          返回推荐商品的数量，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('alsoBoughtProductsRecommend', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productRecommend/alsoBoughtProductsRecommend.htm?productId=243180&returnNum=12&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'productId=243180&returnNum=12&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});