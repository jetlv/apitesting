//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8441
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 用户提醒发货[需求 34751]**/


/**
参数名称         |          参数类型         |          参数说明
ordersCid         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('requestShipping', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/order/requestShipping.htm?ordersCid=en_mi_151103111209_155';
       tester.get(__path(__filename) + 'ordersCid=en_mi_151103111209_155')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});