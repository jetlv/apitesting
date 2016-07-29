//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8526
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID，可以为空
priceUnit         |          String         |          货币简写，默认为USD

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('8周年庆之富豪榜。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/queryOrderTop.htm?memberId=3215155&priceUnit=USD';
       tester.get(__path(__filename) + 'memberId=3215155&priceUnit=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});