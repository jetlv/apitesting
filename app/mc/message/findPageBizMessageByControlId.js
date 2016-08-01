//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8450
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据消息分类ID得到其对应的业务消息分页信息**/


/**
参数名称         |          参数类型         |          参数说明
messageChanel         |          Integer         |          消息发送管道途径（1为APP，2为SMS，3为邮件）
messageControlId         |          Integer         |          消息分类ID
memberId         |          Integer         |          会员ID
pageNo         |          Integer         |          当前页码，默认为1
pageSize         |          Integer         |          每页条数 ，默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findPageBizMessageByControlId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mc/message/findPageBizMessageByControlId.htm?messageControlId=2&messageChanel=1&memberId=3214999&pageNo=1&pageSize=10';
       tester.get(__path(__filename) + 'messageControlId=2&messageChanel=1&memberId=3214999&pageNo=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});