//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6021
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，为空时默认为主站
languageCode         |          String         |          语言编码，不能为空
productIds         |          String         |          购物车商品ID， 不能为空
num         |          String         |          返回数量，为空时默认为5

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('购物车商品推荐    需求#26401', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/shoppingCart/productsRecommend.htm?websiteId=1&languageCode=en-uk&productIds=7805&num=8';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&productIds=7805&num=8')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});