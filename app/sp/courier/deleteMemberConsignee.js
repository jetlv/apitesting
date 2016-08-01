//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6041
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 删除地址薄**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          地址薄ID，不能为空
memberId         |          String         |          会员ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('deleteMemberConsignee', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/deleteMemberConsignee.htm?id=123&memberId=333';
       tester.get(__path(__filename) + 'id=123&memberId=333')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});