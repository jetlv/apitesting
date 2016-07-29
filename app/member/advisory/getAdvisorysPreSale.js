//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6087
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID
websiteId         |          String         |          站点ID
langCode         |          String         |          
days         |          String         |          几天之内的数据
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据条件查询所有咨询(售前)', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/advisory/getAdvisorysPreSale.htm?memberId=44441&langCode=en-uk&websiteId=1&days=7&pageNo=1&pageSize=36';
       tester.get(__path(__filename) + 'memberId=44441&langCode=en-uk&websiteId=1&days=7&pageNo=1&pageSize=36')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});