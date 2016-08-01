//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8510
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 发送短信。**/


/**
参数名称         |          参数类型         |          参数说明
phone         |          String         |          
message         |          String         |          短信内容，长度不能超过300字符，公司信息在短信内容结尾用中文【】括起来，如：【Milanoo.com】
md5         |          String         |          用于验证接口申请的合法性

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sendSms2', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/notify/sms/sendSms2.htm?phone=13***&message=***&md5=***';
       tester.get(__path(__filename) + 'phone=13***&message=***&md5=***')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});