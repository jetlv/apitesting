//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7616
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询商品上下架历史记录**/


/**
参数名称         |          参数类型         |          参数说明
productIds         |          String         |          商品Id串，以逗号分隔，可以为空；
state         |          String         |          商品上下架操作：上架、下架、彻底下架（多个以,分隔），为空时表示 不限；
beginTime         |          String         |          开始时间，格式：yyyy-MM-dd，不能为空；
endTime         |          String         |          结束时间，格式：yyyy-MM-dd，不能为空；endTime - beginTime <= 30;
websiteId         |          Integer         |          站点Id，默认为1主站；
languageCode         |          String         |          语言编码，默认为英文en-uk；
pageNo         |          Integer         |          当前页码，不能为空；
pageSize         |          Integer         |          当前每页显示数目，不能为空；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProductsHistory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/distribution/product/getProductsHistory.json?productIds=6,7,8,10&pageNo=1&pageSize=20&beginTime=2014-04-01&endTime=2014-04-30';
       tester.get(__path(__filename) + 'productIds=6,7,8,10&pageNo=1&pageSize=20&beginTime=2014-04-01&endTime=2014-04-30')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});