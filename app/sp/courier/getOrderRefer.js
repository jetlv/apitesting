//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7841
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询订单来源信息**/


/**
参数名称         |          参数类型         |          参数说明
orderId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getOrderRefer', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getOrderRefer.htm?orderId=2147289';
       tester.get(__path(__filename) + 'orderId=2147289')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});