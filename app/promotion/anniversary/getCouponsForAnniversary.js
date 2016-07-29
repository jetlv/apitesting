//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8523
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          默认为1
languageCode         |          String         |          语言编码
priceUnit         |          String         |          默认为USD

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询8周年庆可以奖励的折扣券规则', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/getCouponsForAnniversary.htm?websiteId=1&languageCode=en-uk';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});