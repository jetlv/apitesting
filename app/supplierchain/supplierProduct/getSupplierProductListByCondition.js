//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6051
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
supplierId         |          String         |          供应商Id.   注：多个用逗号分开如 xxxxx,yyyyy,zzzzz 一个：xxxxxx
supplierProductId         |          String         |          供应商商品Id.   注：多个用逗号分开如 xxxxx,yyyyy,zzzzz 一个：xxxxxx
customId         |          String         |          供应商商品编码
productId         |          String         |          商品ID，注：多个用逗号分开如 xxxxx,yyyyy,zzzzz 一个：xxxxxx
cid         |          String         |          商品编码
supplierProductName         |          String         |          供应商商品名称
isChecked         |          String         |          商品库是否已审核，1是、0否
productActivator         |          String         |          商品是否已上架，1是、0否
pageNo         |          Integer         |          当前页码，不能为null
pageSize         |          Integer         |          每页显示条数，不能为null
state         |          Integer         |          供应商商品上传状态，0:待上传、1：待审核、2：审核通过

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据条件得到供应商商品列表信息，主要用于供应商查询和采购人员查询。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/supplierProduct/getSupplierProductListByCondition.json?supplierId=356&pageNo=1&pageSize=20';
       tester.get(__path(__filename) + 'supplierId=356&pageNo=1&pageSize=20')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});