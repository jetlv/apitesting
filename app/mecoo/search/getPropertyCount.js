//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8439
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过非销售属性ID进行统计**/


/**
参数名称         |          参数类型         |          参数说明
propertyId         |          Integer         |          默认为103373
deviceType         |          Integer         |          默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPropertyCount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/search/getPropertyCount.htm?propertyId=103373&deviceType=1';
       tester.get(__path(__filename) + 'propertyId=103373&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});