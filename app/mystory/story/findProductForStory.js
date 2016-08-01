//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6183
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询用户购买过的商品**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
memberId         |          String         |          会员Id，不能为空
langCode         |          String         |          语言编码，不能为空
num         |          String         |          返回个数，不能为空。小于等于0：代表不限

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findProductForStory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mystory/story/findProductForStory.htm?websiteId=1&memberId=2105243&langCode=en-uk&num=10';
       tester.get(__path(__filename) + 'websiteId=1&memberId=2105243&langCode=en-uk&num=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});