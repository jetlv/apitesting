//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6253
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点
languageCode         |          String         |          语言简写
firstLetter         |          String         |          关键词首字母（字母A-Z）
pageSize         |          Integer         |          页面大小
pageNo         |          Integer         |          当前页

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据语言、关键词首字母、页面大小、当前页查询关键词。按SNUM降序排序', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/keyword/getKeywordByLetter.htm?websiteId=1&languageCode=en-uk&firstLetter=A&pageSize=12&pageNo=1';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&firstLetter=A&pageSize=12&pageNo=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});