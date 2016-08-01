//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8457
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 删除消息**/


/**
参数名称         |          参数类型         |          参数说明
messageType         |          Integer         |          消息大类（1为系统消息，2为业务消息）
messageRecordId         |          String         |          消息记录ID串,格式如1,2,3
memberId         |          Integer         |          会员ID

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('deleteMessage', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mc/message/deleteMessage.htm?messageType=1&messageRecordId=1&memberId=3214999';
       tester.get(__path(__filename) + 'messageType=1&messageRecordId=1&memberId=3214999')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});