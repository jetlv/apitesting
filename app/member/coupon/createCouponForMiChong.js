//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8152
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userId         |          Integer         |          Milanoo员工后台帐号Id，不能为空
score         |          int         |          要兑换的积分数量，大于0
memberId         |          Integer         |          网站前台会员Id，可以为空，不为空时绑定到指定用户
langageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点Id，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据米虫所得米豆兑换礼券(供PHP后台调用的接口)[需求 #31939]。使用折扣券规则Id为en-uk对应为9671，通过不同的积分生成不同面额(score * 折扣券规则中的金额)的礼券，兑换成功时实现积分扣除并记录礼券编码。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/createCouponForMiChong.htm?userId=589&score=10&memberId=&langageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'userId=589&score=10&memberId=&langageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});