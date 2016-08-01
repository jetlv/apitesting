//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7880
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 记录订单支付失败信息**/


/**
参数名称         |          参数类型         |          参数说明
orderId         |          String         |          订单ID，数字，非空
payClass         |          String         |          支付类型，非空
cardType         |          String         |          卡类型，非空
memberId         |          String         |          会员ID，数字，非空
websiteId         |          String         |          站点，非空
deviceType         |          String         |          终端类型，非空
payState         |          String         |          支付状态，0：失败；1：成功，非空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('recordPayFailedInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/recordPayFailedInfo.htm?orderId=1&payClass=pp&cardType=df&memberId=1&websiteId=1&deviceType=1&payState=0';
       tester.get(__path(__filename) + 'orderId=1&payClass=pp&cardType=df&memberId=1&websiteId=1&deviceType=1&payState=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});