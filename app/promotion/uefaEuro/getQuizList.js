//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8518
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询竞猜列表。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id，不能空为；
lang         |          String         |          不能为空；
pageNo         |          Integer         |          当前页码，默认为1；
pageSize         |          Integer         |          每页数量，默认为24；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getQuizList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/uefaEuro/getQuizList.htm?memberId=1&lang=en-uk&pageNo=1&pageSize=24';
       tester.get(__path(__filename) + 'memberId=1&lang=en-uk&pageNo=1&pageSize=24')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});