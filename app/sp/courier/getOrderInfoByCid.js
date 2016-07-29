//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6032
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cr         |          Courier         |          cr.ordersCid:编码编码，不能为空
  cr.memberId:会员ID，不能为空
  cr.lang:语言编码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据订单编码 获取订单里面的相关信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getOrderInfoByCid.htm?cr.ordersCid=en_mi_150824101926_999&cr.memberId=3214999&cr.lang=en-uk';
       tester.get(__path(__filename) + 'cr.ordersCid=en_mi_150824101926_999&cr.memberId=3214999&cr.lang=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});