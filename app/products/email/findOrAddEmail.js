//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6224
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 邮件订阅
 查询或者新增一个邮箱**/


/**
参数名称         |          参数类型         |          参数说明
email         |          String         |          
langCode         |          String         |          
websiteId         |          String         |          
firstName         |          String         |          
gender         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findOrAddEmail', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/email/findOrAddEmail.htm?email=milaoo_test@milanoo.com&langCode=en-uk&websiteId=1&firstName=milanoo_test';
       tester.get(__path(__filename) + 'email=milaoo_test@milanoo.com&langCode=en-uk&websiteId=1&firstName=milanoo_test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});