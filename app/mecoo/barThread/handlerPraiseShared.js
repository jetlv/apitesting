//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8367
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          
snsid         |          Integer         |          
action         |          Integer         |          类型：1为赞,2为取消赞

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('分享点赞(喜欢)接口', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/handlerPraiseShared.htm?userid=3&snsid=31&action=1';
       tester.get(__path(__filename) + 'userid=3&snsid=31&action=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});