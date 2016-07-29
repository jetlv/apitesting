//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8376
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          当前登录用户ID,不可为空
snsTagid         |          Integer         |          标签(话题)ID,不可为空
action         |          Integer         |          处理动作，增加关注=1，取消关注为2

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('处理话题的关注接口', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barLabel/handlerSnsFavorite.htm?userid=3&snsTagid=3&action=1';
       tester.get(__path(__filename) + 'userid=3&snsTagid=3&action=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});