//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5936
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据时间段查询商品id**/


/**
参数名称         |          参数类型         |          参数说明
startTime         |          String         |          开始时间，时间戳，单位秒，不能为空
endTime         |          String         |          结束时间，时间戳，单位秒
languageCode         |          String         |          语言编码，默认为en-uk
websiteId         |          String         |          站点标识，默认为主站
activate         |          String         |          上下架标识，可以传多个值，以“,”分开。-1：彻底下架；0：下架；1：上架

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('list', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/product/list.htm?startTime=15865645615&endTime=15965645615&languageCode=en-uk';
       tester.get(__path(__filename) + 'startTime=15865645615&endTime=15965645615&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});