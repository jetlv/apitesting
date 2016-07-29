//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6252
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点
languageCode         |          String         |          语言简写
categoryId         |          String         |          分类ID（一个分类id或者多个分类id以分割符,隔开）
returnNum         |          String         |          返回关键词个数

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据语言、数量查询关键词。按SNUM降序排序。对应首页“popular searches”', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/keyword/getKeywordByLang.htm?returnNum=10&languageCode=en-uk&categoryId=&websiteId=1&websiteIdLastView=1';
       tester.get(__path(__filename) + 'returnNum=10&languageCode=en-uk&categoryId=&websiteId=1&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});