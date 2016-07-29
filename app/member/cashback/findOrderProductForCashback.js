//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6108
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
orderIds         |          String         |          订单Id，不能为空
langCode         |          String         |          语言编码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询订单产品', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/cashback/findOrderProductForCashback.htm?orderIds=2897129&langCode=en-uk';
       tester.get(__path(__filename) + 'orderIds=2897129&langCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});