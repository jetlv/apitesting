//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6254
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据语言、输入内容查询关键词。按SNUM降序排序**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点
languageCode         |          String         |          语言简写
searchContent         |          String         |          输入内容
returnNum         |          Integer         |          返回数

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getKeywordBySearchContent', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/keyword/getKeywordBySearchContent.htm?websiteId=1&languageCode=en-uk&searchContent=wedding&returnNum=10';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&searchContent=wedding&returnNum=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});