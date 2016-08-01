//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5947
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取商品详情**/


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          不能为空；
langId         |          Integer         |          不能为空
websiteId         |          Integer         |          默认为1；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProductDetails', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/distribution/product/getProductDetails.json?productId=387783&langId=2&websiteId=1';
       tester.get(__path(__filename) + 'productId=387783&langId=2&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});