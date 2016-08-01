//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5942
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询订单详情**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空。
pass         |          String         |          密码，不能为空。
orderCode         |          String         |          订单编号，必填

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getOrderDetailByOrderCode', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/order/getOrderDetailByOrderCode.htm?memberId=2105243&pass=11111&orderCode=en-uk_121201071746_336';
       tester.get(__path(__filename) + 'memberId=2105243&pass=11111&orderCode=en-uk_121201071746_336')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});