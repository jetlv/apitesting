//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6243
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码，不能为空
page         |          Integer         |          操作的页面，不能为空        1首页 2New arrival首页 3best sellers首页
websiteId         |          Integer         |          站点ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('PHP后台页面Footer内容管理接口', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/footerSEO.htm?languageCode=en-uk&page=1&websiteId=1&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&page=1&websiteId=1&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});