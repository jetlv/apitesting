//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8108
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 领取礼券**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          用户ID，不能为空
cookieId         |          String         |          cookie或Token，不能为空
couponRuleId         |          Integer         |          
gameKey         |          String         |          gameKey 游戏Key,不能为空
languageCode         |          String         |          不能为空
websiteId         |          Integer         |          站点Id,为空时默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getDiscount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/promotion/game/getDiscount.htm?memberId=123&cookieId=feewf121&gameKey=FLYINGWITCH&couponRuleId=8439&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=123&cookieId=feewf121&gameKey=FLYINGWITCH&couponRuleId=8439&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});