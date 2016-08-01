//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6111
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询会员rma列表**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID， 不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点ID，不能为空
rmaStatus         |          String         |          rma状态： 0：新建； 1：处理中； 2：关闭; 3:已授权。空或者非数字查询全部(不查询用户已取消的：状态为4)。
keyword         |          String         |          搜索内容，从商品或者订单编号进行搜索(规则同OrderList)
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('myRMA', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/rma/myRMA.htm?websiteIdLastView=1&memberId=2105245&languageCode=en-uk&websiteId=4&rmaStatus=';
       tester.get(__path(__filename) + 'websiteIdLastView=1&memberId=2105245&languageCode=en-uk&websiteId=4&rmaStatus=')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});