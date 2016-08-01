//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8295
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 统计会员折扣券生成礼券数量。注意：统计不区分语言、站点、是否过期、是否使用。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getCount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/coupon/getCount.htm?memberId=3361437';
       tester.get(__path(__filename) + 'memberId=3361437')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});