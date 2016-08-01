//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8168
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 当Issue类型的CASE状态发生变化时需要把状态同步到ERP系统。[需求 #32529]**/


/**
参数名称         |          参数类型         |          参数说明
mc         |          MQCase         |          参数说明如下
  <pre>
      mc.caseId CASE ID，不能为空；
      mc.modifier 修改者ID，不能为空；
      mc.owner CASE所有者ID，当指定或修改CASE所有者时不能为空；
      mc.state CASE修改后的状态：2、处理中  5、关闭，不能为空；
      mc.gmtModified 修改时间戳，不能为空；
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('synCaseState', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/synCaseState.htm?mc.caseId=123&mc.modifier=400&mc.owner=401&mc.state=2&mc.gmtModified=1427863303';
       tester.get(__path(__filename) + 'mc.caseId=123&mc.modifier=400&mc.owner=401&mc.state=2&mc.gmtModified=1427863303')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});