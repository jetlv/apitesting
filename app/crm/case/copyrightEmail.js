//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8164
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 侵权投诉邮件。发送侵权邮件并添加售前咨询CASE。**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，默认为1
memberId         |          String         |          会员ID,默认为0
desc         |          String         |          内容描述
desc1         |          String         |          内容描述
ownerName         |          String         |          发件人名称，不能为空
legalName         |          String         |          发件人名称，不能为空
phone         |          String         |          电话号码
fax         |          String         |          传真
address         |          String         |          邮箱地址
street         |          String         |          街道
city         |          String         |          城市
state         |          String         |          洲/区
postcode         |          String         |          邮编
country         |          String         |          国家
lang         |          String         |          语言，不能为空
deviceType         |          Integer         |          站点，默认为1
ip         |          String         |          ip地址，默认为127.0.0.1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('copyrightEmail', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/copyrightEmail.htm?memberId=400&ownerName=cb&legalName=chenbo&lang=en-uk';
       tester.get(__path(__filename) + 'memberId=400&ownerName=cb&legalName=chenbo&lang=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});