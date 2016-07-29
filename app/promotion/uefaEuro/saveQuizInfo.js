//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8516
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          不能为空；
orderId         |          Integer         |          订单Id，可以为空。不为空时使用此订单进行竞猜，为空时取满足条件最小的订单进行竞猜；
c1         |          Integer         |          国家1，不能为空；
c2         |          Integer         |          国家2，不能为空；
c3         |          Integer         |          国家3，不能为空；
c4         |          Integer         |          国家4，不能为空；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('保存竞猜信息。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/uefaEuro/saveQuizInfo.htm?memberId=123&orderId=456&c1=1&c2=2&c3=3&c4=4';
       tester.get(__path(__filename) + 'memberId=123&orderId=456&c1=1&c2=2&c3=3&c4=4')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});