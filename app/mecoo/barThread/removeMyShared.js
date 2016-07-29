//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8366
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          当前会员ID,不可为空
snsid         |          Integer         |          分享帖子ID,不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('帖吧——删帖', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/removeMyShared.htm?userid=3&snsid=30';
       tester.get(__path(__filename) + 'userid=3&snsid=30')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});