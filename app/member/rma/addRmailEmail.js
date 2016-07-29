//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6113
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          
rmaId         |          String         |          
content         |          String         |          
languageCode         |          String         |          
crmId         |          String         |          
reviewType         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('增加会员rma邮件', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/rma/addRmailEmail.htm?memberId=1228912&rmaId=10000&content=test&languageCode=en-uk&crmId=&reviewType=2';
       tester.get(__path(__filename) + 'memberId=1228912&rmaId=10000&content=test&languageCode=en-uk&crmId=&reviewType=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});