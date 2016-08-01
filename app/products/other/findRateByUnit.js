//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6209
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** **/


/**
参数名称         |          参数类型         |          参数说明
unit         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findRateByUnit', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/other/findRateByUnit.htm?unit=USD';
       tester.get(__path(__filename) + 'unit=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});