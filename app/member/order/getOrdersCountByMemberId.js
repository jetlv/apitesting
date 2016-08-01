//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8131
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过会员ID统计会员的订单数量，注意：只统计订单类型为：等待付款 等待发货 等待收货 等待评论 的订单。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id
websiteId         |          Integer         |          站点Id
websiteIdFilter         |          Integer         |          站点过滤参数，可以为空，多个以","分开，如果有值将忽略websiteId参数

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getOrdersCountByMemberId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/order/getOrdersCountByMemberId.htm?memberId=2924077&websiteId=1';
       tester.get(__path(__filename) + 'memberId=2924077&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});