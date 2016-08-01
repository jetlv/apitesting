//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8317
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 帖吧——收藏和取消收藏帖子动作**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          当前会员ID,不可为空
threadId         |          Integer         |          帖子ID,不可为空
type         |          Integer         |          类型：1为收藏,2为取消收藏，不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('threadFavorite', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/thread/threadFavorite.htm?memberId=3&threadId=7&type=1';
       tester.get(__path(__filename) + 'memberId=3&threadId=7&type=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});