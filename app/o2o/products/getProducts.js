//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5865


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('接口说明通过分类ID、非销售属性获取商品（并返回商品详情），并返回该分类的所有非销售属性（逻辑同主站列表页）', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/products/getProducts.htm?pcs.categoryId=8729&pcs.languageCode=fr-fr&pcs.propertyArray=100526,529@priceRange,0:50&pcs.websiteId=8';
       tester.get(__path(__filename) + 'pcs.categoryId=8729&pcs.languageCode=fr-fr&pcs.propertyArray=100526,529@priceRange,0:50&pcs.websiteId=8')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});