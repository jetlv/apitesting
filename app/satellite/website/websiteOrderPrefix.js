//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5987
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询站点订单缩写**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('websiteOrderPrefix', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/website/websiteOrderPrefix.htm?websiteId=2';
       tester.get(__path(__filename) + 'websiteId=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});