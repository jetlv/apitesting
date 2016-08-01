//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6080
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据ID查询咨询类型**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          类型ID
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getConsultationById', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/advisory/getConsultationById.htm?id=123&languageCode=en-uk';
       tester.get(__path(__filename) + 'id=123&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});