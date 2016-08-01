//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8525
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 统计会员中奖数量。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          不能为空
languageCode         |          String         |          不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getWinningCount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/anniversary/getWinningCount.htm?memberId=1&languageCode=en-uk';
       tester.get(__path(__filename) + 'memberId=1&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});