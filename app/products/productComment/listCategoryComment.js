//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6270
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 统计所有一级及二级类目的共享评论个数**/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言Code
websiteId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('listCategoryComment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/listCategoryComment.htm?languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});