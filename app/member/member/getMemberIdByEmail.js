//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8400
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据邮箱和站点得到会员ID**/


/**
参数名称         |          参数类型         |          参数说明
email         |          String         |          邮箱
websiteId         |          Integer         |          站点

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getMemberIdByEmail', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/getMemberIdByEmail.htm?email=171user@milanoo.com&websiteId=1';
       tester.get(__path(__filename) + 'email=171user@milanoo.com&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});