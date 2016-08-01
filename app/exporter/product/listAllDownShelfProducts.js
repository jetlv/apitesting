//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5939
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询所有下架和彻底下架的商品**/


/**
参数名称         |          参数类型         |          参数说明
startTime         |          String         |          
endTime         |          String         |          
languageCode         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('listAllDownShelfProducts', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/product/listAllDownShelfProducts.htm?startTime=1264156554&endTime=1274156554&languageCode=en-uk';
       tester.get(__path(__filename) + 'startTime=1264156554&endTime=1274156554&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});