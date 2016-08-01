//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8527
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 节日期间APP显示不图标**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          不能为空
lang         |          String         |          不能为空
deviceType         |          Integer         |          不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getprictures', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/getprictures.htm?websiteId=1&lang=en-uk&deviceType=3';
       tester.get(__path(__filename) + 'websiteId=1&lang=en-uk&deviceType=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});