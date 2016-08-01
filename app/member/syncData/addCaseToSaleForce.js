//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6139
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** php后台调用此方法把sc库的信息写入crm系统。**/


/**
参数名称         |          参数类型         |          参数说明
scId         |          String         |          为咨询的id或者rma的id
errorType         |          String         |          信息类型：case，rma

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addCaseToSaleForce', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/syncData/addCaseToSaleForce.htm?scId=10010&errorType=case';
       tester.get(__path(__filename) + 'scId=10010&errorType=case')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});