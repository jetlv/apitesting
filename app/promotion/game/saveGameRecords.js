//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5914
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 保存游戏分数并返回奖励**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          用户ID,不能为空
gameKey         |          String         |          游戏Key,不能为空
records         |          String         |          游戏分数,不能为空
languageCode         |          String         |          语言编码,不能为空
websiteId         |          String         |          站点ID,为空时默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('saveGameRecords', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/game/saveGameRecords.htm?memberId=2105243&gameKey=SHEQIQIU&records=3000&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=2105243&gameKey=SHEQIQIU&records=3000&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});