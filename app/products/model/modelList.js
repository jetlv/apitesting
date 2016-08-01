//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8094
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 模特列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点id，默认为1
langCode         |          String         |          语言编码，不能为空
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('modelList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/model/modelList.htm?websiteId=1&langCode=en-uk&pageNo=1&pageSize=10';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&pageNo=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});