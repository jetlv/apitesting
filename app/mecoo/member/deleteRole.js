//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8382
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID，不能为空
roleId         |          Integer         |          角色ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('移出一二次元基因', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/member/deleteRole.htm?memberId=100&roleId=1';
       tester.get(__path(__filename) + 'memberId=100&roleId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});