//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8084
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 生成商品信息关键词链接**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，为空默认1
langId         |          String         |          语言ID，为空默认除俄语、日语、中文之外的语言
deviceType         |          String         |          
productIds         |          String         |          要处理的商品ID，多个以“,”分开

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('madeProductInfoKeywordUrl', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/keyword/madeProductInfoKeywordUrl.htm?websiteId=1&langId=2';
       tester.get(__path(__filename) + 'websiteId=1&langId=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});