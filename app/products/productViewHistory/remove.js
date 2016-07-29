//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8419
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cookieId         |          String         |          用户cookieId，不能为空
memberId         |          Integer         |          用户ID，登录后不能为空
websiteId         |          Integer         |          站点ID，默认为1
productIds         |          String         |          不能空，多个以,分隔

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('批量删除浏览记录', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productViewHistory/remove.htm?cookieId=cc02db9d60a21373c63379ed67f74dca&memberId=&websiteId=1&productIds=1,2,3';
       tester.get(__path(__filename) + 'cookieId=cc02db9d60a21373c63379ed67f74dca&memberId=&websiteId=1&productIds=1,2,3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});