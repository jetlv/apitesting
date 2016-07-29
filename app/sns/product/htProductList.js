//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7688
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
categoryId         |          String         |          搜索分类
productId         |          String         |          搜索商品id
pageNo         |          String         |          页数，不能为空
pageSize         |          String         |          页面大小，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sns 后台商品列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/htProductList.htm?websiteId=1&languageCode=en-uk&pageNo=1&pageSize=36';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&pageNo=1&pageSize=36')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});