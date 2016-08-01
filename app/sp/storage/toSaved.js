//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6002
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 把购物车中的商品添加到寄存器中**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          
cartIds         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('toSaved', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/storage/toSaved.htm?memberId=10&cartIds=1546';
       tester.get(__path(__filename) + 'memberId=10&cartIds=1546')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});