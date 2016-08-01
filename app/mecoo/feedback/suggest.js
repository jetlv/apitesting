//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8341
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 用户提交建议**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          
content         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('suggest', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/feedback/suggest.htm?memberId=&content=test';
       tester.get(__path(__filename) + 'memberId=&content=test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});