//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8162
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 编辑Case回复。**/


/**
参数名称         |          参数类型         |          参数说明
cr         |          CaseReply         |          参数说明如下
  <pre>
      cr.id CASE回复Id，不能为空；
      cr.memberId 会员Id，用户登录了就必传，用于验证提交Case的用户才能进行回复；
      cr.title 回复标题，可以为空；
      cr.content 回复内容，不能为空；
      cr.images 回复附件，多张图片用|分隔，可以为空；
      cr.createIp 回复IP，不能为空；
  </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('editCaseReply', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/editCaseReply.htm?cr.id=100&cr.memberId=400&cr.title=reply&cr.content=this is a reply&cr.images=2014/201407/20140722/20140722115034651nWHDId.jpg&cr.createIp=192.168.6.41';
       tester.get(__path(__filename) + 'cr.id=100&cr.memberId=400&cr.title=reply&cr.content=this is a reply&cr.images=2014/201407/20140722/20140722115034651nWHDId.jpg&cr.createIp=192.168.6.41')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});