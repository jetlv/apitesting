//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6048
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据语言编码查询一级分类信息（没有促销商品的类目不返回），同时返回相应分类下所有的促销商品个数、促销商品列表。**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          站点，默认主站
languageCode         |          String         |          语言简写， 如 “en-uk”，不能为空
returnNum         |          Integer         |          每个分类返回促销商品的数量，默认为4
productIds         |          String         |          要排除的商品，多个以“,”分开

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getTopCategoriesInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sale/sale/getTopCategoriesInfo.htm?languageCode=en-uk&returnNum=4&productIds=267148,383459,136686,2925,159368&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&returnNum=4&productIds=267148,383459,136686,2925,159368&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});