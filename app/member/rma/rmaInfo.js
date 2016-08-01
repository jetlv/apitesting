//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6112
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询会员rma详情**/


/**
参数名称         |          参数类型         |          参数说明
rmaId         |          String         |          rmaID
languageCode         |          String         |          语言编码
memberId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('rmaInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/rma/rmaInfo.htm?languageCode=en-uk&rmaId=29313&memberId=1947929';
       tester.get(__path(__filename) + 'languageCode=en-uk&rmaId=29313&memberId=1947929')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});