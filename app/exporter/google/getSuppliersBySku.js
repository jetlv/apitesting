//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5932
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** /**
 根据SKU 的id 查询供应商信息。**/


/**
参数名称         |          参数类型         |          参数说明
skuIds         |          String         |          sku的ID，可以多个，以","分开，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getSuppliersBySku', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/google/getSuppliersBySku.htm?skuIds=996';
       tester.get(__path(__filename) + 'skuIds=996')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});