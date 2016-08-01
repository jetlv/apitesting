//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8111
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 保存游戏分数并返回战况及以相应折扣券Id。（用户可以根据自身条件选择接受此折扣券或再次挑战）
 注意：此接口与{@link GameController#saveGameRecords(String, String, String, String, String)} 接口不同。**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          用户ID，登录用户不能为空
cookieId         |          String         |          cookie或Token，不能为空
gameKey         |          String         |          游戏Key,不能为空
records         |          String         |          游戏分数，不能为空
languageCode         |          String         |          不能为空
websiteId         |          String         |          站点Id,为空时默认为1

 **/


/// <reference path="../../include.d.ts" />

var R = require('../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('game', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080//promotion/game/saveGameRecords2.htm?memberId=&cookieId=feewf121&gameKey=FLYINGWITCH&records=1220&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=&cookieId=feewf121&gameKey=FLYINGWITCH&records=1220&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});