//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6067
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          商品id
cid         |          String         |          商品编码，注意与productId参数二选一
pageSize         |          Integer         |          每页显示数量
pageNo         |          Integer         |          当前页码
optionName         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据商品ID或者商品编码获取对应的SKU信息列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/sku/getSkuInfoListByProductIdOrCid.json?productId=394163&pageSize=12&pageNo=1';
       tester.get(__path(__filename) + 'productId=394163&pageSize=12&pageNo=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});