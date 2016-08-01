//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8524
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 8周年庆之领券。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id，不能为空；
couponId         |          Integer         |          当前选择的礼券规则Id，不能为空
languageCode         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('toGetCoupon', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/toGetCoupon.htm?memberId=1&couponId=1001&languageCode=en-uk';
       tester.get(__path(__filename) + 'memberId=1&couponId=1001&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});