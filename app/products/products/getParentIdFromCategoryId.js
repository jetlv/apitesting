//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6232
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 商品父类目ID查询**/


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getParentIdFromCategoryId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getParentIdFromCategoryId.htm?categoryId=392';
       tester.get(__path(__filename) + 'categoryId=392')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});