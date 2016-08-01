//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6031
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据订单id 获取订单里面的相关信息**/


/**
参数名称         |          参数类型         |          参数说明
cr         |          Courier         |          cr.ordersId:订单ID，不能为空
  cr.memberId:会员ID，不能为空
  cr.lang:语言编码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getOrderInfoByOrderId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getOrderInfoByOrderId.htm?cr.ordersId=2897157&cr.memberId=3214999&cr.lang=en-uk';
       tester.get(__path(__filename) + 'cr.ordersId=2897157&cr.memberId=3214999&cr.lang=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});