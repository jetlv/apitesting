//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6003
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 寄存器中的商品添加到购物车中**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          
cartIds         |          String         |          
wetsiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('toCart', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/storage/toCart.htm?memberId=10&cartIds=156454&wetsiteId=2';
       tester.get(__path(__filename) + 'memberId=10&cartIds=156454&wetsiteId=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});