//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7824
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
name         |          String         |          联系人名称，不能为空
email         |          String         |          联系邮箱，不能为空
shareUrl         |          String         |          分享链接，不能为空
shareType         |          String         |          分享类型，1：Blog Banners；2：Social Site Post；3：Youtube Video，不能为空
message         |          String         |          描述，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sns 添加广告、站点、视频任务', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/member/addTask.htm?memberId=1&name=test&email=test@test.com&shareUrl=test&shareType=1&message=test123';
       tester.get(__path(__filename) + 'memberId=1&name=test&email=test@test.com&shareUrl=test&shareType=1&message=test123')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});