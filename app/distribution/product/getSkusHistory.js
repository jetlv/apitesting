//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7617
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          商品Id串，最多10个，以逗号分隔，可以为空；
skuIds         |          String         |          SKUID串，最多10个，以逗号分隔，可以为空；
skuCodes         |          String         |          SKUCODE串，最多10个，以逗号分隔，可以为空；
state         |          String         |          SKU上下架状态：上架、下架，为空时表示 不限；
beginTime         |          String         |          开始时间，格式：yyyy-MM-dd，不能为空；
endTime         |          String         |          结束时间，格式：yyyy-MM-dd，不能为空；endTime - beginTime <= 30;
pageNo         |          Integer         |          当前页码，不能为空；
pageSize         |          Integer         |          当前每页显示数目，不能为空；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询SKU上下架历史记录', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/distribution/product/getSkusHistory.json?productIds=3579&pageNo=1&pageSize=20&beginTime=2014-04-01&endTime=2014-04-30';
       tester.get(__path(__filename) + 'productIds=3579&pageNo=1&pageSize=20&beginTime=2014-04-01&endTime=2014-04-30')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});