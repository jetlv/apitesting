//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8362
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据标签ID得到标签信息**/


/**
参数名称         |          参数类型         |          参数说明
snsid         |          Integer         |          分享的帖子ID
userid         |          Integer         |          用户ID

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getShareInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/getShareInfo.htm?snsid=1';
       tester.get(__path(__filename) + 'snsid=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});