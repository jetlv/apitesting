//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6233
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 类目信息（包含所有语言）是存放在内存中，正常情况下由调度任务于每天下午3点刷新一次。该接口用于人工刷新此类目信息**/


/**

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('flushProductCategory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/flushProductCategory.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});