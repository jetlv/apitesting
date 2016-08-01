//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8004
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 推送消息。**/


/**
参数名称         |          参数类型         |          参数说明
messageIds         |          String         |          消息Id，以逗号分隔，不能为空；
memberTokenIds         |          String         |          指定推送消息对象，以逗号分隔，为空时为所有用户推送；
tokenType         |          Integer         |          token类型 0苹果 1安卓，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('pushMessage', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/pushMessage/pushMessage.htm?messageIds=27,28&tokenType=0';
       tester.get(__path(__filename) + 'messageIds=27,28&tokenType=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});