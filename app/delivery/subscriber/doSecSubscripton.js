//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8297
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
company         |          String         |          快递公司编码
number         |          String         |          运单编号
from         |          String         |          出发城市 可以不填
to         |          String         |          到达城市
pj         |          String         |          所属项目（haioo或者主站）
sign         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('运单物流信息订阅提交', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/delivery/subscriber/doSecSubscripton.htm?company=yuantong&number=0000000001&from=成都&to=上海&pj=haioo';
       tester.get(__path(__filename) + 'company=yuantong&number=0000000001&from=成都&to=上海&pj=haioo')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});