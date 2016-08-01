//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7102
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据条件得到供应商商品列表信息，主要用于供应商查询和采购人员查询。**/


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
state         |          Integer         |          供应商商品上传状态，-1:审核不通过、0:待上传、1：待审核、2：审核通过、4：已放入回收站
userId         |          Integer         |          当前登录的后台用户Id，为供应商时此参数值为0（即：只能操作当前登录用户负责的供应商对应的供应商商品信息）;
      当state=0时，只查询creator=userId的数据（即：待上传时供应商、采购都只能看到自己添加的供应商商品）。
 <b>注意：</b>userId参数只是在新品上传功能中使用，其他功能模块地方不使用。

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getSupplierProductListByCondition', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/supplierProduct/getSupplierProductListByCondition.json?supplierId=356&pageNo=1&pageSize=20';
       tester.get(__path(__filename) + 'supplierId=356&pageNo=1&pageSize=20')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});