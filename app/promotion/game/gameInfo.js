//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5916


/**
参数名称         |          参数类型         |          参数说明
gameKey         |          String         |          游戏Key,不能为空
languageCode         |          String         |          语言编码,不能为空
websiteId         |          String         |          站点Id,为空时默认为1
memberId         |          String         |          用户ID，可以为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据游戏Key获取游戏详细信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/game/gameInfo.htm?languageCode=en-uk&memberId=2105243&webisteId=1&gameKey=KSPDT&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&memberId=2105243&webisteId=1&gameKey=KSPDT&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});