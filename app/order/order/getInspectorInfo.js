//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5959
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
rmaProductId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('通过rmaProductId查询此RMA 商品在从供应商收货后的质检人信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/order/order/getInspectorInfo.htm?rmaProductId=40069';
       tester.get(__path(__filename) + 'rmaProductId=40069')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});