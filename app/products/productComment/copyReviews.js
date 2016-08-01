//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6274
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 评论复制**/


/**
参数名称         |          参数类型         |          参数说明
websiteIdFrom         |          String         |          来源站点，不能为空
langCode         |          String         |          来源站点语言，不能为空
websiteIdTo         |          String         |          目的站点，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('copyReviews', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/copyReviews.htm?websiteIdFrom=1&langCode=en-uk&websiteIdTo=3';
       tester.get(__path(__filename) + 'websiteIdFrom=1&langCode=en-uk&websiteIdTo=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});