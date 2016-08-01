//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6040
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 【1】商品退款总金额
      （1）商品退款总金额 = A单个商品的退款金额 * A商品退的数量 + B .................. 
      （2）单个商品的退款金额 = 单个商品的下单金额 * 折扣率
      （3）折扣率 = 订单商品总金额 / （ 订单商品总金额+ 折扣总金额 ）
  折扣总金额不要计算运费的折扣金额，订单商品总金额+ 折扣总金额相当于是使用折扣前的总金额，各种折扣（会员折扣、折扣码折扣）金额要相加。
  
 【2】退运费
     （订单所有商品的重量运费） -（剩余不退的商品的重量运费）
 订单所有商品的重量运费，每次都要算，不能直接调用订单的运费。**/


/**
参数名称         |          参数类型         |          参数说明
orderId         |          String         |          订单ID
orderCid         |          String         |          
backProInfo         |          String         |          要退货的商品信息，可以传两种格式，(1)如：5:2;986:1，代表意思：订单商品ID（不是商品表的ID）:退货个数;订单商品ID:退货个数
                                                     (2)如：8148692_3:2;20916752_1:1，代表意思：订单商品的skuid_订单商品的站点:退货个数;订单商品的skuid_订单商品的站点:退货个数

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('orderBackCount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/orderBackCount.htm?orderId=10&backProInfo=1453:1';
       tester.get(__path(__filename) + 'orderId=10&backProInfo=1453:1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});