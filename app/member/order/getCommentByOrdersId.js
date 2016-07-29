//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6134
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
OrdersId         |          String         |          订单id
langCode         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('#13218', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/order/getCommentByOrdersId.htm?OrdersId=156858&langCode=en-uk';
       tester.get(__path(__filename) + 'OrdersId=156858&langCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});