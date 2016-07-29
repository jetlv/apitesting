//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5966
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点标志，为空默认1。
languageCode         |          String         |          语言编码，不能为空。
parentCategoryId         |          String         |          父栏目目，空或者非ID查询全部。
returnLevel         |          String         |          返回各层级子节点数量。 如：5:-1:5 表示第一级返回5个栏目、第二层返回所有栏目、第三层返回5个栏目。其中-1：代表不限。
activate         |          String         |          是否激活，空：查询全部，-1：删除；1：禁用；0：正常。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询所有栏目信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/article/article/getCategory.htm?websiteId=1&languageCode=en-uk&returnLevel=5:-1:5&activate=0&parentCategoryId=';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&returnLevel=5:-1:5&activate=0&parentCategoryId=')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});