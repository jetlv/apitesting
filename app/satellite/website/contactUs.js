//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5989
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 帮助中心contact us**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID
languageCode         |          String         |          语言编码

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('contactUs', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/website/contactUs.htm?languageCode=en-uk&websiteId=1&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&websiteId=1&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});