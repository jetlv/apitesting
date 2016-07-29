//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8129
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
deviceType         |          Integer         |          
lang         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('检查APP是否需要提醒更新', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/pushMessage/lastRelease.htm?deviceType=3&lang=en-uk';
       tester.get(__path(__filename) + 'deviceType=3&lang=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});