//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6068
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 参与预采购的所有sku预采购信息。注：预采购天数和安全库存其中一个>0（激活状态）就返回。**/


/**
参数名称         |          参数类型         |          参数说明
pageNo         |          Integer         |          
pageSize         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPreparePurchaseSkuList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/sku/getPreparePurchaseSkuList.json?pageNo=1&pageSize=10';
       tester.get(__path(__filename) + 'pageNo=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});