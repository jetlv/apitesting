//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5972
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点标志，为空默认1。
languageCode         |          String         |          语言编码，不能为空。
authorId         |          String         |          文章作者ID，不能为空。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('作者信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/article/communityArticle/authorDetail.htm?websiteId=1&languageCode=en-uk&authorId=1';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&authorId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});