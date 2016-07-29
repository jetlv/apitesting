//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6184
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
s         |          MyStory         |          故事对像

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('新增故事', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mystory/story/addStory.htm?s.memberId=1&s.langCode=en-uk&s.cusParams=2415|milanoo.com/mystory/demo|/tmp/mystory1.png|tmp/mystory2.jpg&s.websiteId=1&s.deviceType=2';
       tester.get(__path(__filename) + 's.memberId=1&s.langCode=en-uk&s.cusParams=2415|milanoo.com/mystory/demo|/tmp/mystory1.png|tmp/mystory2.jpg&s.websiteId=1&s.deviceType=2')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});