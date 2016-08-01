//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8161
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询Case详情，并更新客服的回复为已读。**/


/**
参数名称         |          参数类型         |          参数说明
caseId         |          Integer         |          CASE id，不能为空；
memberId         |          Integer         |          会员Id，只有售前且没有绑定memberId时可以为空，其他情况不能为空；
languageCode         |          String         |          语言编码，不能为空；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('caseDetail', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/caseDetail.htm?caseId=263146&memberId=400&languageCode=en-uk';
       tester.get(__path(__filename) + 'caseId=263146&memberId=400&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});