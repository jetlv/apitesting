//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8299
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 明文查询接口**/


/**
参数名称         |          参数类型         |          参数说明
company         |          String         |          快递公司编码 小写字母 如：yuantong表示圆通
trackingNumber         |          String         |          运单号

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('queryTrackInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/delivery/tracking/queryTrackInfo.htm?company=yuantong&trackingNumber=0000000001';
       tester.get(__path(__filename) + 'company=yuantong&trackingNumber=0000000001')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});