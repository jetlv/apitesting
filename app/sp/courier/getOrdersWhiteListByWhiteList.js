//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6043
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
owl         |          OrdersWhiteList         |          owl.memberId 会员ID，不能为空
 owl.websiteId 站点ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('订单白名单功能[需求 13710]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getOrdersWhiteListByWhiteList.htm?owl.memberId=2748121&owl.websiteId=1';
       tester.get(__path(__filename) + 'owl.memberId=2748121&owl.websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});