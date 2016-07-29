//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7881
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          信息ID，数字，非空
payState         |          String         |          支付状态，0：失败；1：成功，非空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('更新支付结果信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/updatePayFailedInfo.htm?id=1&payState=1';
       tester.get(__path(__filename) + 'id=1&payState=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});