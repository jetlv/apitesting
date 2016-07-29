//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8151
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
commentId         |          Integer         |          评论Id，不能为空
memberId         |          Integer         |          用户Id，可以为空
langageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点Id，不能为空
memberMail         |          String         |          用户Email不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('客服审核用户评论通过后给用户发礼券(供PHP后台调用的接口)[错误 #31433]
 注意：评论审核通过才发礼券，礼券发送成功由接口修改reward_status=1状态，同一评论最多只能发一个礼券。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/createCouponForMemberByReview.htm?commentId=518089&memberId=20&langageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'commentId=518089&memberId=20&langageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});