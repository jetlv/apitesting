//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5964
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，可以为空，可以有多个，以“,”分开。
langCode         |          String         |          语言编码，不能为空
memberId         |          String         |          会员ID，如果不是数字，查询全部。
status         |          String         |          许愿墙状态，如果不是数字，查询全部。
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询许愿墙', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/wishwall/wishwall/findWishingWall.htm?websiteId=1&langCode=en-uk&memberId=10&status=1&pageNo=1&pageSize=24';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&memberId=10&status=1&pageNo=1&pageSize=24')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});