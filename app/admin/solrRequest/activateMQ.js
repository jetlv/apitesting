//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8167
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 手动激活或关闭MQ，详见[需求 #31624]**/


/**
参数名称         |          参数类型         |          参数说明
state         |          Integer         |          1激活、0关闭

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('activateMQ', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/admin/solrRequest/activateMQ.htm?state=0';
       tester.get(__path(__filename) + 'state=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});