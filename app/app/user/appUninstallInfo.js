//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8132
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** app用户卸载并记录其卸载原因**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员id 不能为空，数字
websiteId         |          String         |          站点id 不能为空 数字
languageCode         |          String         |          语言代码 不能为空
deviceType         |          String         |          重点类型id  不能为空  数字
reason         |          String         |          卸载原因   不能为空  大小250个字符

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('appUninstallInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/user/appUninstallInfo.htm?memberId=1&websiteId=1&languageCode=en-uk&reason=xsdsdsdadsda&deviceType=1';
       tester.get(__path(__filename) + 'memberId=1&websiteId=1&languageCode=en-uk&reason=xsdsdsdadsda&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});