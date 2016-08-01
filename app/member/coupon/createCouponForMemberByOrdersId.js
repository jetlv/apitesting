//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6126
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据订单ID为邀请人生成礼券(供PHP后台调用的接口)  需求#17539**/


/**
参数名称         |          参数类型         |          参数说明
ordersId         |          String         |          订单ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('createCouponForMemberByOrdersId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/createCouponForMemberByOrdersId.htm?ordersId=1008';
       tester.get(__path(__filename) + 'ordersId=1008')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});