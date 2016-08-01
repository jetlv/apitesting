//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8095
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 随机取模特**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点id，默认为1
langCode         |          String         |          语言编码，不能为空
rows         |          String         |          取几条数据

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('modelListRandom', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/model/modelListRandom.htm?websiteId=1&langCode=en-uk&rows=10';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&rows=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});