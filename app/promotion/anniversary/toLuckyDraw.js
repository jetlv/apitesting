//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8522
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 抽奖接口。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id，不能为空
languageCode         |          String         |          语言编码，不能为空
deviceType         |          Integer         |          设备ID，不能为空
countryCode         |          String         |          国家编码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('toLuckyDraw', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/toLuckyDraw.htm?memberId=1&languageCode=en-uk&deviceType=1&countryCode=us';
       tester.get(__path(__filename) + 'memberId=1&languageCode=en-uk&deviceType=1&countryCode=us')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});