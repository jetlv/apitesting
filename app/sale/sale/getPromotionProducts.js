//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6050
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过分类Id及其他参数查询促销商品列表。**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          站点，默认主站
languageCode         |          String         |          语言简写，不能为空
categoryId         |          Integer         |          分类id，不能为空；
libkey         |          String         |          促销类型，可以为空；
sortObject         |          String         |          字段名和排序串（排序字段有：recommend降、addedTime降、sortPrice升降），为空时默认为：recommend:0,addedTime:0；0表示降序，1表示升序；
pageNo         |          Integer         |          当前页码，默认为1；
pageSize         |          Integer         |          每页显示数，默认为24。
priceRange         |          String         |          价格筛选区间，格式为： price1:price2,如：23:68
priceUnit         |          String         |          价格单位，默认为美元

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPromotionProducts', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sale/sale/getPromotionProducts.htm?languageCode=en-uk&categoryId=391&libkey=&sortObject=recommend%3A0&pageNo=1&pageSize=36&priceRange=&priceUnit=USD';
       tester.get(__path(__filename) + 'languageCode=en-uk&categoryId=391&libkey=&sortObject=recommend%3A0&pageNo=1&pageSize=36&priceRange=&priceUnit=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});