//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6296
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询模特信息**/


/**
参数名称         |          参数类型         |          参数说明
modelId         |          String         |          模特ID，不能为空。
langCode         |          String         |          语言编码，不能为空。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('modelInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/model/modelInfo.htm?modelId=15&langCode=en-uk';
       tester.get(__path(__filename) + 'modelId=15&langCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});