//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6215
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** **/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          
pageNo         |          Integer         |          
pageSize         |          Integer         |          
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findPromotionFeatrue2', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/promotion/findPromotionFeatrue2.htm?languageCode=en-uk&pageNo=1&pageSize=12&websiteId=2';
       tester.get(__path(__filename) + 'languageCode=en-uk&pageNo=1&pageSize=12&websiteId=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});