//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8121
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 添加奇葩礼物**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空，数字
languageCode         |          String         |          语言代码，不能为空
deviceType         |          String         |          终端类型，不能为空，数字
memberId         |          String         |          会员ID，不能为空，数字
picture         |          String         |          照片地址
description         |          String         |          礼物描述，不能为空，长度不能超200

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('add', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/wonderfulGift/add.htm?websiteId=1&languageCode=en-uk&deviceType=1&memberId=3&picture=2014/201411/20141107/test.jpg&description=test';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&deviceType=1&memberId=3&picture=2014/201411/20141107/test.jpg&description=test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});