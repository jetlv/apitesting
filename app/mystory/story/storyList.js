//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6186
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，默认为1
langCode         |          String         |          语言编码，不能为空
sort         |          String         |          排序，可选。可选值：newest,view,support
pageNo         |          String         |          第几页，可选
pageSize         |          String         |          每页大小，可选
categoryId         |          String         |          类目ID，可以有多个，以“,”分开
isHomePage         |          Integer         |          是否是首页调用，0代表不是，1代表是,默认为0

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('分页查询mystory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mystory/story/storyList.htm?websiteId=1&langCode=en-uk&sort=newest&pageNo=1&pageSize=16&categoryId=&isHomePage=1';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&sort=newest&pageNo=1&pageSize=16&categoryId=&isHomePage=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});