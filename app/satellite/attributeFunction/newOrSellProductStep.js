//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5981
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 热门作品集或者最新作品集之集合列表页**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
categoryId         |          String         |          类目ID
attributeId         |          String         |          属性ID， 不能为空
type         |          String         |          类型，1为热门作品集，2 为最新作品集,如果为空，默认为1
returnNum         |          String         |          返回数量, 如果为空，默认返回4个

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('newOrSellProductStep', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/newOrSellProductStep.htm?websiteId=4&languageCode=fr-fr&attributeId=101415&type=1';
       tester.get(__path(__filename) + 'websiteId=4&languageCode=fr-fr&attributeId=101415&type=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});