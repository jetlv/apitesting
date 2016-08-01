//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8377
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 增加或者减少会员的帖吧首页统计信息**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          对象所属会员ID,比如删除的帖子所属会员ID,不可为空
number         |          Integer         |          加1则为1,减1则为-1,不可为空
type         |          Integer         |          类型,帖子数:1;关注数:2;被关注数:3;被赞数:4,不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addOrSubtractHomeCount', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barHomeCount/addOrSubtractHomeCount.htm?memberId=3&number=1&type=1';
       tester.get(__path(__filename) + 'memberId=3&number=1&type=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});