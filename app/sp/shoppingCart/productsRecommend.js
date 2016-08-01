//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8015
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 备注：需求#26401要求使用商品的附加商品作为推荐商品，所以重命名此方法（从productsRecommend改为productsRecommend1）  2014.06.10
 
 购物车商品推荐**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，可选。
languageCode         |          String         |          语言简写，不能为空。
productIds         |          String         |          商品ID，多个ID用”,”分隔，如：”234,345,34”
num         |          String         |          返回类目相关商品推荐数量

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('productsRecommend', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/shoppingCart/productsRecommend.htm?websiteId=1&languageCode=en-uk&productIds=7805&num=8';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&productIds=7805&num=8')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});