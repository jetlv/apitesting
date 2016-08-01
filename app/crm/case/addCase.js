//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8158
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 添加Case，注意：前台可以添加售前、售后CASE，后台可以添加Issue CASE； 此接口不能添加RMA类型的CASE，RMA CASE在提交RMA时系统自动添加。**/


/**
参数名称         |          参数类型         |          参数说明
c         |          Case         |          参数说明如下
  <pre>
      c.caseType CASE类型:1售前、2售后、4Issue，不能为空；
      c.memberId 会员Id，未注册的用户提交售前咨询可以为空，其它情况都应传递些参数；
      c.memberName 会员名称，caseType为2、4时此参数不能为空；
      c.memberEmail 用户邮箱，不能为空；
      c.classId CASE原因，caseType为1、2时此参数不能为空；
      c.ordersId 订单Id,caseType为2时此参数不能为空；
      c.ordersCid 订单编码，caseType为2、4时此参数不能为空；
      c.creator 操作者Id，caseType为4时此参数不能为空；
      c.title CASE主题，可以为空，为空是取分类内容；
      c.content CASE内容，不能为空；为Issue时可以为空；
      c.images 附件，多张图片用|分隔，可以为空；
      c.createIp IP地址，APP调用时可以为空；
      c.websiteId 站点Id，默认为1；
      c.lang 语言编码，不能和c.langId同时为空；
      c.langId 语言ID，不能和c.lang同时为空；
      c.deviceType 设备类型：1、主站 2、wap站 3、苹果app 4、安卓app，默认为1；
  </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addCase', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/case/addCase.htm?c.caseType=1&c.memberId=400&c.memberName=chepoo&c.memberEmail=chenbo@milanoo.com&c.classId=23&c.content=客服态度差&c.images=2014/201407/20140717/20140717141903330SYbaBh.jpg|2014/201407/20140717/20140717141903352yYdaPJ.jpg&c.createIp=192.168.6.41&c.websiteId=1&c.lang=en-uk&c.deviceType=1';
       tester.get(__path(__filename) + 'c.caseType=1&c.memberId=400&c.memberName=chepoo&c.memberEmail=chenbo@milanoo.com&c.classId=23&c.content=客服态度差&c.images=2014/201407/20140717/20140717141903330SYbaBh.jpg|2014/201407/20140717/20140717141903352yYdaPJ.jpg&c.createIp=192.168.6.41&c.websiteId=1&c.lang=en-uk&c.deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});