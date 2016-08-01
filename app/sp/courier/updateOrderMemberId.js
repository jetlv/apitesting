//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8292
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** [需求 #33262] PayPal快捷支付后绑定订单同原来的Milanoo帐户上**/


/**
参数名称         |          参数类型         |          参数说明
orderId         |          Integer         |          订单Id，不能为空
newMemberId         |          Integer         |          绑定后的会员MemberId，不能为空
newEmail         |          String         |          绑定后的会员Email，不能为空
oldMemberId         |          Integer         |          绑定前的会员MemberId

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('updateOrderMemberId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/updateOrderMemberId.htm?orderId=123&newMemberId=111&newEmail=111@milanoo.com&oldMemberId=222';
       tester.get(__path(__filename) + 'orderId=123&newMemberId=111&newEmail=111@milanoo.com&oldMemberId=222')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});