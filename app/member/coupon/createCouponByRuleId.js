//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8294
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据折扣券规则ID为用户生成礼券。[需求 #33611]礼券优化。**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          折扣券规则ID，不能为空
memberId         |          String         |          会员ID，不能为空
email         |          String         |          参数isSendEmail为0时此项不能为空
isSendEmail         |          String         |          为空或1时不发送邮件，为0时发送邮件
createMax         |          Integer         |          该折扣券规则为每个用户生成最大次数，大于0时有效（注意：此处是限定会员，不区分语言和站点）
langCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('createCouponByRuleId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/createCouponByRuleId.htm?id=&memberId=&email=&isSendEmail=&createMax=5&langCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'id=&memberId=&email=&isSendEmail=&createMax=5&langCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});