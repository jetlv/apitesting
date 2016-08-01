//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8412
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 取消订单并保存取消原因，原因保存在milanoo_orders.Remarks1中**/


/**
参数名称         |          参数类型         |          参数说明
ordersId         |          String         |          
reason         |          String         |          取消原因

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('upadteOrdersEstate', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/order/upadteOrdersEstate.htm?ordersId=1&reason=not like';
       tester.get(__path(__filename) + 'ordersId=1&reason=not like')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});