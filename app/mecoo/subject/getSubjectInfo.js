//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8385
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取COS热销专题详情**/


/**
参数名称         |          参数类型         |          参数说明
subjectId         |          Integer         |          专题ID，不能为空
memberId         |          Integer         |          用户登录后不能为空
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getSubjectInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/subject/getSubjectInfo.htm?subjectId=1&memberId=1';
       tester.get(__path(__filename) + 'subjectId=1&memberId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});