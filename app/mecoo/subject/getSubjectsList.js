//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8384
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询热销COS**/


/**
参数名称         |          参数类型         |          参数说明
pageNo         |          Integer         |          默认为1
pageSize         |          Integer         |          默认为12
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getSubjectsList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/subject/getSubjectsList.htm?pageNo=1&pageSize=12';
       tester.get(__path(__filename) + 'pageNo=1&pageSize=12')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});