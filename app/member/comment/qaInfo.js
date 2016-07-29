//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6138
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
qaId         |          String         |          
languageCode         |          String         |          语言简写，不能为空
memberId         |          String         |          会员ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('会员QA详情', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/comment/qaInfo.htm?qaId=39790&languageCode=en-uk&memberId=115935';
       tester.get(__path(__filename) + 'qaId=39790&languageCode=en-uk&memberId=115935')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});