//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5979
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询单一作品集列表DCP的上半部分**/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码
attributeId         |          String         |          属性Id
attributeOptionId         |          String         |          属性值Id
websiteId         |          String         |          站点Id

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('singleAttributeFunctionDcp', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/singleAttributeFunctionDcp.htm?languageCode=en-uk&attributeId=101415&attributeOptionId=1526&websiteId=4&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&attributeId=101415&attributeOptionId=1526&websiteId=4&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});