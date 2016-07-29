//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6125
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          礼券规则ID
memberId         |          String         |          会员ID
langCode         |          String         |          语言编码
websiteId         |          String         |          站点ID

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据指定的规则生成礼券', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/createCouponByRuleId.htm?id=3498&memberId=3&langCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'id=3498&memberId=3&langCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});