//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7864
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
orderId         |          String         |          订单ID，数字，非空
payClass         |          String         |          支付类型，非空
memberId         |          String         |          会员ID，数字，非空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('记录订单支付失败信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/recordPayFailedInfo.htm?orderId=1&payClass=pp&memberId=1';
       tester.get(__path(__filename) + 'orderId=1&payClass=pp&memberId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});