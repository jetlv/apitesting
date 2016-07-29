//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6107
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员Id，不能为空
langCode         |          String         |          语言编码，可以为空
websiteId         |          String         |          站点ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询已支付订单', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/cashback/findOrderForCashback.htm?memberId=3214999&langCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=3214999&langCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});