//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6054
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 修改供应商商品审核下架状态**/


/**
参数名称         |          参数类型         |          参数说明
supplierProductId         |          Integer         |          供应商商品ID
checkOfflineStatus         |          Integer         |          审核下架状态(1发起审核 2取消审核 3审核成功 4审核失败)

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('modifySupplierProductCheckOfflineStatus', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/supplierProduct/modifySupplierProductCheckOfflineStatus.json?supplierProductId=394371&checkOfflineStatus=1';
       tester.get(__path(__filename) + 'supplierProductId=394371&checkOfflineStatus=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});