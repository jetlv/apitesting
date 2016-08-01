//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8452
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获得未读消息数**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          站点ID
lang         |          String         |          语言code
messageChanel         |          Integer         |          消息途径（1为APP，2为SMS,3为邮件)
memberId         |          Integer         |          会员ID

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findAllUnReadMessageNum', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mc/message/findAllUnReadMessageNum.htm?websiteId=9&lang=cn-cn&messageChanel=1&memberId=3214999';
       tester.get(__path(__filename) + 'websiteId=9&lang=cn-cn&messageChanel=1&memberId=3214999')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});