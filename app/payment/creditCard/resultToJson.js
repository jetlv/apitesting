//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7269
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 返回结果Json串**/


/**

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('resultToJson', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/creditCard/resultToJson.json';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});