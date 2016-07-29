//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6217
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productIdArray         |          String         |          
languageCode         |          String         |          
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询商品评分', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/promotion/findProductsScore.htm?productIdArray=19960,242082&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'productIdArray=19960,242082&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});