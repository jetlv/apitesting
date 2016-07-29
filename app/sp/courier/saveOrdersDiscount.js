//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6044
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
od         |          OrderDiscount         |          <pre>
  od.orderId:订单ID
  od.discountName:固定为"BankTransfer discount"
  od.libkey:固定为"BankTransferOff_1_5"
  od.discount_Amount:折扣金额
  od.couponType:固定为97
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('银行在线支付1.5%折扣[需求 13666]，保存订单折扣并修改订单金额', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/saveOrdersDiscount.htm?od.orderId=314&od.discountName=WYTEST1&od.libkey=WYTEST1&od.discount_Amount=428.99';
       tester.get(__path(__filename) + 'od.orderId=314&od.discountName=WYTEST1&od.libkey=WYTEST1&od.discount_Amount=428.99')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});