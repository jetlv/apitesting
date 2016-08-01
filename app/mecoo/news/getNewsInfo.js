//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8433
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取一头条信息，不查询评论，查询评论接口详见{@link NewsController#commentList(Integer, Integer, Integer, Integer)}**/


/**
参数名称         |          参数类型         |          参数说明
newsId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getNewsInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/news/getNewsInfo.htm?newsId=1';
       tester.get(__path(__filename) + 'newsId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});