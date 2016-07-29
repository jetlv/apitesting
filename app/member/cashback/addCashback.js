//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6110
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
c         |          Cashback         |          cashback对像
 <pre>
  c.id:
  c.languageId:
  c.langCode:
  c.orderId:
  c.orderCid:
  c.reviewWeb:
  c.reviewUrl:
  c.cashbackType: 退款方式 0:visa credit 1:信用卡 2:coupon code
  c.visaCredit: 如果cashback_type选择了0或者1,在这里记录退款的账号
  c.couponCode:
  c.screenshot1: 评论截图
  c.screenshot2: 评论截图
  c.note:
  c.memberId:
  c.memberEmail:
  c.websiteId:
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('新增cashback', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/cashback/addCashback.htm?c.memberId=54115&c.langCode=en-uk&c.websiteId=2&c.orderId=5615';
       tester.get(__path(__filename) + 'c.memberId=54115&c.langCode=en-uk&c.websiteId=2&c.orderId=5615')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});