//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6202
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 头部query商品推荐**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1
productId         |          String         |          商品ID，不能为空
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”
searchContent         |          String         |          从refer中取得的搜索关键字。可以为空，为空时直接查询同类目的商品
pageSize         |          String         |          每页显示记录条数
pageNo         |          String         |          当前页码，不能小于1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('topQueryRecommend', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productRecommend/topQueryRecommend.htm?productId=243180&searchContent=1&pageSize=36&pageNo=1&languageCode=en-uk&websiteIdLastView=1';
       tester.get(__path(__filename) + 'productId=243180&searchContent=1&pageSize=36&pageNo=1&languageCode=en-uk&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});