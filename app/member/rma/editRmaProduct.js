//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6120
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
p         |          RmaProduct         |          rma产品信息
type         |          Integer         |          操作类型 1：编辑RMA商品信息，2：删除RMA商品信息。注意：这两种操作只能在状态0中

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('编辑rma信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/rma/editRmaProduct.htm?p.id=16&p.rmaId=10010&p.orderId=1063262&type=1';
       tester.get(__path(__filename) + 'p.id=16&p.rmaId=10010&p.orderId=1063262&type=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});