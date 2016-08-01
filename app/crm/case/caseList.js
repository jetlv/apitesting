//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8160
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据条件分页查询CASE列表。**/


/**
参数名称         |          参数类型         |          参数说明
caseTypes         |          String         |          CASE类型:1售前、2售后、3RMA、4Issue，多个以,分隔，不能为空；
memberId         |          Integer         |          会员ID，不能为空；
websiteId         |          Integer         |          站点ID，不能为空；
languageCode         |          String         |          语言编码，不能为空；
days         |          Integer         |          几天之内的数据，可以为空；
pageNo         |          Integer         |          第几页，为空时默认1；
pageSize         |          Integer         |          每页大小，为空时默认为10；

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('caseList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/caseList.htm?caseTypes=2,4&memberId=400&websiteId=1&languageCode=en-uk';
       tester.get(__path(__filename) + 'caseTypes=2,4&memberId=400&websiteId=1&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});