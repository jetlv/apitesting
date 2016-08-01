//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7845
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询sns购物车**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID，不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点ID，为空时默认为主站

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('snsCartInfo', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/snsCartInfo.htm?memberId=2105475&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=2105475&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});