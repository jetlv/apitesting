//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8091
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
dayStep         |          String         |          时间阶段，如：2014-07，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sns 流量及订单统计', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/trafficOrder/statTrafficAndOrderForMoney.htm?memberId=1&dayStep=2014-07';
       tester.get(__path(__filename) + 'memberId=1&dayStep=2014-07')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});