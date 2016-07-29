//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5926
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1。
categoryId         |          String         |          商品分类ID
languageCode         |          String         |          语言代码
dataType         |          String         |          数据来源类型：1：新品；2：热销
pageNo         |          String         |          第几页。
pageSize         |          String         |          每页的商品大小。
sortObject         |          String         |          字段名和排序方式,如： productsRecommended:1,addedTime:1 1表示升序、0表示倒序
priceRang         |          String         |          价格区间，如：50:100。
priceUnit         |          String         |          价格单位。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('按列表页查询新到货或者热销商品', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/nb/product/getProductList.htm?categoryId=392&dataType=2&pageNo=1&pageSize=36&languageCode=en-uk&websiteIdLastView=1';
       tester.get(__path(__filename) + 'categoryId=392&dataType=2&pageNo=1&pageSize=36&languageCode=en-uk&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});