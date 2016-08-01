//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8456
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 更改消息读状态**/


/**
参数名称         |          参数类型         |          参数说明
messageType         |          Integer         |          消息大类（1为系统消息，2为业务消息）
messageRecordId         |          String         |          消息记录ID串,格式如1,2,3
memberId         |          Integer         |          会员ID
readStatus         |          Integer         |          读状态 1为未读 2为已读

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('updateMessageReadStatus', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mc/message/updateMessageReadStatus.htm?messageType=1&messageRecordId=1&memberId=3214999&readStatus=2';
       tester.get(__path(__filename) + 'messageType=1&messageRecordId=1&memberId=3214999&readStatus=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});