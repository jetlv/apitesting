//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8444
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          商品ID串,格式如1,2,3,4
websiteId         |          Integer         |          站点ID,如9
languageCode         |          String         |          语言Code,如cn-cn

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据商品ID得到市场价格和销售价格的总合', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getProductSumPrice.htm?productIds=509945,536815&languageCode=cn-cn&websiteId=9';
       tester.get(__path(__filename) + 'productIds=509945,536815&languageCode=cn-cn&websiteId=9')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});