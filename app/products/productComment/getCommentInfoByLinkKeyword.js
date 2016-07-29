//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8076
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
keyword         |          String         |          关键词，不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点ID，为空时默认为1
pageNo         |          Integer         |          第几页，为空时默认为1
pageSize         |          Integer         |          每页大小，为空时默认为24

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据关键词链接获取评论列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/getCommentInfoByLinkKeyword.htm?keyword=test&languageCode=en-uk&websiteId=1&pageNo=1&pageSize=36';
       tester.get(__path(__filename) + 'keyword=test&languageCode=en-uk&websiteId=1&pageNo=1&pageSize=36')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});