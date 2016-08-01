//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6257
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据分类id和语言code随机返回一个关键字信息**/


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          分类ID，可以为空
languageCode         |          String         |          语言code

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getRecommendKeyword', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/keyword/getRecommendKeyword.htm?categoryId=391&languageCode=en-uk';
       tester.get(__path(__filename) + 'categoryId=391&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});