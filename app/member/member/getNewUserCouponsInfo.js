//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8513
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          
languageCode         |          String         |          
priceUnit         |          String         |          为空时不进行货币转换

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取新人礼包信息。[需求 #36896]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/getNewUserCouponsInfo.htm?websiteId=1&languageCode=en-uk&priceUnit=USD';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&priceUnit=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});