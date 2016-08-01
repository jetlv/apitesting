//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8336
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询头条列表，注意：首页头条、头条列表、头条详情均从此接口获取数据。**/


/**
参数名称         |          参数类型         |          参数说明
pageSize         |          Integer         |          不能为空
pageNo         |          Integer         |          不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getNewsList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/news/getNewsList.htm?pageSize=3&pageNo=1';
       tester.get(__path(__filename) + 'pageSize=3&pageNo=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});