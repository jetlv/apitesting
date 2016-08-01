//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6091
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过订单ID查询售后咨询及回复**/


/**
参数名称         |          参数类型         |          参数说明
orderId         |          String         |          订单ID
langCode         |          String         |          语言编码
memberId         |          String         |          用户Id,不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('advisoryAndReplyAfterSaleByOrderId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/advisory/advisoryAndReplyAfterSaleByOrderId.htm?websiteIdLastView=1&orderId=1873675&memberId=2105243';
       tester.get(__path(__filename) + 'websiteIdLastView=1&orderId=1873675&memberId=2105243')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});