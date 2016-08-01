//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8394
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询当前商品参与的优惠活动（自动使用的折扣券）**/


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          商品ID，不能为空
websiteId         |          Integer         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
deviceType         |          Integer         |          设备类型，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getCouponsByProductId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/getCouponsByProductId.htm?productId=123&websiteId=1&languageCode=en-uk&deviceType=1';
       tester.get(__path(__filename) + 'productId=123&websiteId=1&languageCode=en-uk&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});