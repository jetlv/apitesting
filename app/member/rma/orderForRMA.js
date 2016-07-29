//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6115
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID， 不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点ID，不能为空
keyword         |          String         |          搜索内容，从商品或者订单编号进行搜索(规则同OrderList)
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('申请RMA的订单列表，包括申请过的未申请过的', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/rma/orderForRMA.htm?websiteIdLastView=1&memberId=2105245&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'websiteIdLastView=1&memberId=2105245&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});