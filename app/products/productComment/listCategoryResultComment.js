//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6269
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，默认为1
languageCode         |          String         |          语言Code，不能为空
categoryId         |          Integer         |          分类Id，不能为空
pageSize         |          Integer         |          每页显示条数
pageNo         |          Integer         |          页码

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('商品类目评论列表信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/listCategoryResultComment.htm?websiteId=1&languageCode=en-uk&categoryId=391&pageNo=1&pageSize=12';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&categoryId=391&pageNo=1&pageSize=12')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});