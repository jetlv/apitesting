//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5920
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 增加Pinterest**/


/**
参数名称         |          参数类型         |          参数说明
name         |          String         |          参与人名称
email         |          String         |          参与人邮箱
url         |          String         |          链接地址

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addPinterest', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/pinterest/addPinterest.htm?name=milanoo&email=test@milanoo.com&url=www.milanoo.com';
       tester.get(__path(__filename) + 'name=milanoo&email=test@milanoo.com&url=www.milanoo.com')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});