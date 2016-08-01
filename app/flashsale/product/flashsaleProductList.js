//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7585
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 闪购活动商品列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
langCode         |          String         |          语言代码，不能为空
eventId         |          String         |          活动ID，不能为空
sort         |          String         |          排序，格式如default:asc，有三种排序字段：default，addTime，price，两种排序方式：asc或者1，desc或者0，不能为空
pageNo         |          String         |          页码，不能为空
pageSize         |          String         |          页面大小，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('flashsaleProductList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/flashsale/product/flashsaleProductList.htm?websiteId=1&langCode=en-uk&eventId=6&sort=default:asc&pageNo=1&pageSize=80';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&eventId=6&sort=default:asc&pageNo=1&pageSize=80')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});