//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8449
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据消息控制(消息分类)ID得到系统类型的消息分页信息**/


/**
参数名称         |          参数类型         |          参数说明
messageControlId         |          Integer         |          消息分类ID
messageChanel         |          Integer         |          消息发送管道(1APP,2SMS,3邮件)
memberId         |          Integer         |          会员ID
pageNo         |          Integer         |          当前页码,默认为1
pageSize         |          Integer         |          每页条数,默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findPageSysMessageByControlId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mc/message/findPageSysMessageByControlId.htm?messageControlId=2&messageChanel=1&memberId=3214999&pageNo=1&pageSize=10';
       tester.get(__path(__filename) + 'messageControlId=2&messageChanel=1&memberId=3214999&pageNo=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});