//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5971
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 作者列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点标志，为空默认1。
languageCode         |          String         |          语言编码，不能为空。
authorType         |          String         |          文章作者类型，1,Facebook 2:Tiwwer 3,YouTube 4,Path。
authorSort         |          String         |          文章作者关联分类。
pageNo         |          String         |          第几页，默认为1。
pageSize         |          String         |          每页几条记录，默认24。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('authorList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/article/communityArticle/authorList.htm?websiteId=1&languageCode=en-uk&authorType=&authorSort=';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&authorType=&authorSort=')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});