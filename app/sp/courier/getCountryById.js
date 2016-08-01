//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8017
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询国家信息**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          国家ID
langCode         |          String         |          语言

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getCountryById', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getCountryById.htm?id=1&langCode=en-uk';
       tester.get(__path(__filename) + 'id=1&langCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});