//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5984
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询Meta Title信息**/


/**
参数名称         |          参数类型         |          参数说明
attributeId         |          String         |          属性ID，不能为空
attributeOptionId         |          String         |          属性项Id，不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点ID，为空时默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getMetaTitle', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/getMetaTitle.htm?websiteId=4&languageCode=en-uk&attributeId=101415&attributeOptionId=1526&websiteIdLastView=1';
       tester.get(__path(__filename) + 'websiteId=4&languageCode=en-uk&attributeId=101415&attributeOptionId=1526&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});