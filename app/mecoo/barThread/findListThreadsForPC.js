//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8378
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获得分享列表(为PC端提供服务)**/


/**
参数名称         |          参数类型         |          参数说明
pageNo         |          Integer         |          当前页码,可以为空,默认为1
pageSize         |          Integer         |          每页条数,可以为空,默认为20

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findListThreadsForPC', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/findListThreadsForPC.htm?pageNo=1&pageSize=20';
       tester.get(__path(__filename) + 'pageNo=1&pageSize=20')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});