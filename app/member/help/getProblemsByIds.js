//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6105
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询指定的帮助中心文章**/


/**
参数名称         |          参数类型         |          参数说明
langCode         |          String         |          语言简写，不能为空。
websiteId         |          String         |          站点ID，不能为空
problemIds         |          String         |          文章ID，不能为空。多个以","分开

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProblemsByIds', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/help/getProblemsByIds.htm?langCode=en-uk&websiteId=1&problemIds=1261,1295';
       tester.get(__path(__filename) + 'langCode=en-uk&websiteId=1&problemIds=1261,1295')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});