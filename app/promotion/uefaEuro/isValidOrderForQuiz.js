//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8515
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id，不能为空；
orderId         |          Integer         |          订单Id，可以为空。不为空时判断此订单是否有效；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('判断会员是否有可用于竞猜的订单。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/uefaEuro/isValidOrderForQuiz.htm?memberId=123&orderId=456';
       tester.get(__path(__filename) + 'memberId=123&orderId=456')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});