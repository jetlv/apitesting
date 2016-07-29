//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8166
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
s         |          Survey         |          参数说明如下
  <pre>
      s.caseId CASE ID，不能为空；
      s.memberId 会员ID，可以为空；
      s.email 会员邮箱，不能为空；
      s.productSatisfaction 商品满意度，1~10，默认为1；
      s.processingTime 处理时间满意度，1~10，默认为1；
      s.shippingTime 快递时间满意度，1~10，默认为1；
      s.productPrice 商品价钱满意度，1~10，默认为1；
      s.respondingTime 客服回复时间满意度，1~10，默认为1；
      s.quality 客服回复质量满意度，1~10，默认为1；
      s.content 其他意见或建议；
      s.websiteId 站点ID，默认为1；
      s.languageCode 语言编码，不能为空；
  </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('Case处理后的问卷调查，并发送Coupon。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/addSurveyAndSendCoupon.htm?s.caseId=263149&s.memberId=400&s.email=chenbo@milanoo.com&s.productSatisfaction=1&s.processingTime=2&s.shippingTime=3&s.productPrice=4&s.respondingTime=5&s.quality=6&s.content=Nothing&s.websiteId=1&s.languageCode=en-uk';
       tester.get(__path(__filename) + 's.caseId=263149&s.memberId=400&s.email=chenbo@milanoo.com&s.productSatisfaction=1&s.processingTime=2&s.shippingTime=3&s.productPrice=4&s.respondingTime=5&s.quality=6&s.content=Nothing&s.websiteId=1&s.languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});