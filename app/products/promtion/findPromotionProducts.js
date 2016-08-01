//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6219
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据促销专题id和语言编码查询促销专题商品列表信息
      注意：customUrl 和 featureId 同时传时customUrl优先**/


/**
参数名称         |          参数类型         |          参数说明
featureId         |          Integer         |          
customUrl         |          String         |          
languageCode         |          String         |          
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findPromotionProducts', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/promtion/findPromotionProducts.htm?featureId=12&customUrl=&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'featureId=12&customUrl=&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});