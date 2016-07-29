//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8127
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          奇葩礼物ID，不能为空，数字
memberId         |          String         |          会员ID，数字
websiteId         |          String         |          站点，数字
languageCode         |          String         |          语言代码
deviceType         |          String         |          终端类型，数字

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询奇葩礼物详细信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/wonderfulGift/get.htm?id=1';
       tester.get(__path(__filename) + 'id=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});