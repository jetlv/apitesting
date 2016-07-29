//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6227
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，默认为1
languageCode         |          String         |          语言编码，不能为空
productNum         |          String         |          指定返回的记录数，不能为空。
crowd         |          String         |          人群的key，主要用于法国国家站

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询推荐商品，用于主站首页的热销商品。
     先从表查询商品，如果满足条件的商品数量不足，从搜索引擎取数据补足。
     搜索引擎取数据条件：按推荐度从高到低排序取相应数据。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getProducsRecommend.htm?languageCode=en-uk&productNum=4&crowd=&websiteId=1&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&productNum=4&crowd=&websiteId=1&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});