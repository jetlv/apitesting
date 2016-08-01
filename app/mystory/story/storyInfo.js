//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6187
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询mystory详情**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          故事ID，不能为空
langCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点,非数字默认为1
sort         |          String         |          排序，可选。可选值：newest,view,support，如果为空，自动按newest排序。
categoryId         |          String         |          顶级类目ID, 不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('storyInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mystory/story/storyInfo.htm?id=7885&sort=newest&categoryId=0&langCode=en-uk&websiteIdLastView=1';
       tester.get(__path(__filename) + 'id=7885&sort=newest&categoryId=0&langCode=en-uk&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});