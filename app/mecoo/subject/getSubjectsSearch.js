//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8352
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
type         |          Integer         |          剧集类型：1日漫，2美漫，3国漫，4游戏，可以为空
roleId         |          Integer         |          角色ID，可以为空
content         |          String         |          搜索内容，可以为空
pageNo         |          Integer         |          默认为1
pageSize         |          Integer         |          默认为30

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('套装集合页', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/subject/getSubjectsSearch.htm?type=&roleId=&content=&pageNo=1&pageSize=30';
       tester.get(__path(__filename) + 'type=&roleId=&content=&pageNo=1&pageSize=30')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});