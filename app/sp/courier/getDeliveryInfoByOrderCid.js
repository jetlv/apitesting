//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8396
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据订单号查询快递信息 -> [需求 #34522]**/


/**
参数名称         |          参数类型         |          参数说明
cid         |          String         |          订单编码，参数必填
pj         |          String         |          参数可选，默认为milanoo，可选值为：milanoo、mecoo
deviceType         |          Integer         |          设备类型，默认为3

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getDeliveryInfoByOrderCid', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getDeliveryInfoByOrderCid.htm?cid=en-uk_1213261620_181&pj=milanoo&deviceType=1';
       tester.get(__path(__filename) + 'cid=en-uk_1213261620_181&pj=milanoo&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});