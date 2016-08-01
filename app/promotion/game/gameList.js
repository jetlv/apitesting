//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5915
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询游戏列表,返回游戏列表和当前用户的游戏积分与排名**/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码， 不能为空
websiteId         |          String         |          站点Id,为空时默认为1
memberId         |          String         |          用户ID， 不能为空
rankNum         |          String         |          返回游戏的前多少名,为空时默认为100

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('gameList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/game/gameList.htm?languageCode=en-uk&memberId=2105243&webisteId=1&websiteIdLastView=1&rankNum=50';
       tester.get(__path(__filename) + 'languageCode=en-uk&memberId=2105243&webisteId=1&websiteIdLastView=1&rankNum=50')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});