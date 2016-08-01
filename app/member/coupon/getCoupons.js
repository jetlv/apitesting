//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6124
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询会员后台折扣券**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
languageCode         |          String         |          语言简写，不能为空
websiteId         |          String         |          站点ID，不能为空
categoryId         |          String         |          分类ID，可以为空
pageNo2         |          String         |          第几页（已使用的）
pageSize2         |          String         |          每页大小（已使用的）
pageNo3         |          String         |          第几页（已过期的）
pageSize3         |          String         |          每页大小（已过期的）

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getCoupons', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/getCoupons.htm?websiteIdLastView=1&languageCode=en-uk&memberId=2105243&websiteId=4';
       tester.get(__path(__filename) + 'websiteIdLastView=1&languageCode=en-uk&memberId=2105243&websiteId=4')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});