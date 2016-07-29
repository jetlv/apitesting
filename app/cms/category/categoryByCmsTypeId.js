//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8116
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
langCode         |          String         |          语言编码，不能为空
deviceType         |          String         |          设备类型，不能为空
cmsTypeId         |          String         |          cms类型对应值，如分类ID，高搜字符串，专题ID等，不能为空
cmsType         |          String         |          cms类型：1分类2高搜3专题4新品5促销6其他，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询cms类目及子类目', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/cms/category/categoryByCmsTypeId.htm?websiteId=1&langCode=en-uk&deviceType=1&cmsTypeId=392&cmsType=1';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&deviceType=1&cmsTypeId=392&cmsType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});