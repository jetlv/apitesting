//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6225
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 邮件退订，返回结果见 业务接口。**/


/**
参数名称         |          参数类型         |          参数说明
email         |          String         |          
langCode         |          String         |          
websiteId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('unsubscribe', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/email/unsubscribe.htm?email=milanoo_test@milanoo.com&langCode=pt-pt&websiteId=2';
       tester.get(__path(__filename) + 'email=milanoo_test@milanoo.com&langCode=pt-pt&websiteId=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});