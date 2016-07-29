//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6242
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          站点ID，不能为空
languageCode         |          String         |          语言简写，不能为空
pageNo         |          Integer         |          第几页
pageSize         |          Integer         |          页面大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询品牌', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/queryBrandList.htm?websiteId=3&languageCode=en-uk&categoryId=&pageNo=1&pageSize=500';
       tester.get(__path(__filename) + 'websiteId=3&languageCode=en-uk&categoryId=&pageNo=1&pageSize=500')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});