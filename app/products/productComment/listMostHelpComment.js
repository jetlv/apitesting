//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6268
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，默认为1
languageCode         |          String         |          语言Code，不能为空
categoryId         |          Integer         |          分类Id，不能为空
keyword         |          String         |          关键词
pageNo         |          Integer         |          
pageSize         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('Most Helpful 评论列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/listMostHelpComment.htm?languageCode=en-uk&categoryId=391&pageNo=1&pageSize=5&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&categoryId=391&pageNo=1&pageSize=5&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});