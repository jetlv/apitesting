//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6036
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
order         |          Order         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取会员的帐单地址', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getBillingAddress.htm?order.memberId=3214999';
       tester.get(__path(__filename) + 'order.memberId=3214999')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});