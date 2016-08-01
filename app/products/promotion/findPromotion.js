//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6216
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询促销**/


/**
参数名称         |          参数类型         |          参数说明
libkey         |          String         |          促销类型
languageCode         |          String         |          
rows         |          Integer         |          
rowNum         |          Integer         |          
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findPromotion', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/promotion/findPromotion.htm?libkey=DailyMadness&rows=5&rowNum=5&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'libkey=DailyMadness&rows=5&rowNum=5&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});