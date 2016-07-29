//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8407
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          登录后不能为空
cookieId         |          String         |          不能和memberId同时为空
subjectIds         |          String         |          套装ID串，多个用,分隔

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('批量删除套装', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/wishlist/removeWishlist.htm?memberId=2267805&cookieId=&subjectIds=1,2,3';
       tester.get(__path(__filename) + 'memberId=2267805&cookieId=&subjectIds=1,2,3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});