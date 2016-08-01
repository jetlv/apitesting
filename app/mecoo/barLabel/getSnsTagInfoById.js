//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8374
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据标签（话题）ID获得标签（话题）信息**/


/**
参数名称         |          参数类型         |          参数说明
snsTagId         |          Integer         |          标签(话题)ID,不可为空
userId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getSnsTagInfoById', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barLabel/getSnsTagInfoById.htm?snsTagId=1&userid=1';
       tester.get(__path(__filename) + 'snsTagId=1&userid=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});