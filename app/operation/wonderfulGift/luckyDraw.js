//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8123
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空，数字
languageCode         |          String         |          语言代码，不能为空
memberId         |          String         |          会员ID，不能为空，数字
id         |          String         |          奇葩礼物ID，不能为空，数字

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('奇葩礼物之抽奖', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/wonderfulGift/luckyDraw.htm?websiteId=1&languageCode=en-uk&memberId=3&id=1';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&memberId=3&id=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});