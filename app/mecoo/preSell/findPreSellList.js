//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8445
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1
pageNo         |          Integer         |          当前页码，默认为1
pageSize         |          Integer         |          每页条数，默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取预售信息分页列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/preSell/findPreSellList.htm?pageNo=1&pageSize=10&deviceType=3';
       tester.get(__path(__filename) + 'pageNo=1&pageSize=10&deviceType=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});