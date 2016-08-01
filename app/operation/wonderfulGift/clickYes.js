//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8128
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 奇葩礼物之点赞**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          奇葩礼物ID，不能为空，数字
memberId         |          String         |          会员ID，不能为空，数字
ip         |          String         |          ip，不能为空，字符串

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('clickYes', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/wonderfulGift/clickYes.htm?id=1&memberId=3&ip=1.1.1.1';
       tester.get(__path(__filename) + 'id=1&memberId=3&ip=1.1.1.1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});