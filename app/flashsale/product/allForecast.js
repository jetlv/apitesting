//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7583
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询所有闪购活动预告**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
langCode         |          String         |          语言代码，不能为空
returnNum         |          String         |          返回数量

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('allForecast', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/flashsale/product/allForecast.htm?websiteId=1&langCode=en-uk&returnNum=6';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&returnNum=6')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});