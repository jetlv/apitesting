//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6023
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据国家和快递方式查询运输时间**/


/**
参数名称         |          参数类型         |          参数说明
countryId         |          String         |          国家ID，必须是数字
express         |          String         |          快递方式，不能为空，可选值为：Standard、Expedited、SuperSaver

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getExpressTime', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/transPort/getExpressTime.htm?countryId=1&express=Expedited';
       tester.get(__path(__filename) + 'countryId=1&express=Expedited')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});