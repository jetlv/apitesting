//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8293
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 增加商品到货通知**/


/**
参数名称         |          参数类型         |          参数说明
productId         |          String         |          商品ID，不能为空。
languageCode         |          String         |          语言简写，不能为空
email         |          String         |          邮箱
memberId         |          Integer         |          会员ID，注意：此会员ID和email是相匹配的，不匹配时忽略些参数 //[需求 #33540]

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('arriveEmail', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/arriveEmail.htm?productId=2917&languageCode=en-uk&email=test@milanoo&memberId=123';
       tester.get(__path(__filename) + 'productId=2917&languageCode=en-uk&email=test@milanoo&memberId=123')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});