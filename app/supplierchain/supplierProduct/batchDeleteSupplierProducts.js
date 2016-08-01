//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8082
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 批量删除供应商商品，注意：只能删除状态为：待上传、已放入回收站 的供应商商品。**/


/**
参数名称         |          参数类型         |          参数说明
ids         |          String         |          供应商商品id，以,分隔
userId         |          Integer         |          操作的用户id，供应商传0

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('batchDeleteSupplierProducts', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/supplierProduct/batchDeleteSupplierProducts.json?ids=1,2,3&userId=0';
       tester.get(__path(__filename) + 'ids=1,2,3&userId=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});