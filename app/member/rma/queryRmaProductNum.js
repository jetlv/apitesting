//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7763
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
beginDate         |          String         |          开始时间，不能为空，格式：yyyy-MM-dd HH:mm:ss
endDate         |          String         |          结束时间，格式：yyyy-MM-dd HH:mm:ss

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询一段时间内的RMA商品数量和对应的供应商Id。[需求 #25602]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/rma/queryRmaProductNum.htm?beginDate=2014-04-01&endDate=2014-05-15 13:54:42';
       tester.get(__path(__filename) + 'beginDate=2014-04-01&endDate=2014-05-15 13:54:42')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});