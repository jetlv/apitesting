//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6045
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 取消银行在线支付1.5%折扣[需求 13666]，删除订单折扣并修改订单金额**/


/**
参数名称         |          参数类型         |          参数说明
id         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('delOrdersDiscount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/delOrdersDiscount.htm?id=10';
       tester.get(__path(__filename) + 'id=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});