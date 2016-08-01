//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5986
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询站点类型**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('websiteType', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/website/websiteType.htm?websiteId=3';
       tester.get(__path(__filename) + 'websiteId=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});