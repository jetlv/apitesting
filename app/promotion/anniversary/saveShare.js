//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8521
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 用户分享到FB后保存其抽奖资格。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员Id，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('saveShare', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/saveShare.htm?memberId=1';
       tester.get(__path(__filename) + 'memberId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});