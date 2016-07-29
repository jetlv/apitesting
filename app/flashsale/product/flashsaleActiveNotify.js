//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7584
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
langCode         |          String         |          语言代码，不能为空
eventId         |          String         |          活动ID，不能为空
email         |          String         |          邮箱，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('闪购活动上线通知', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/flashsale/product/flashsaleActiveNotify.htm?websiteId=1&langCode=en-uk&eventId=6&email=test@test.com';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&eventId=6&email=test@test.com')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});