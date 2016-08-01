//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5962
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 新增许愿墙**/


/**
参数名称         |          参数类型         |          参数说明
w         |          WishWall         |          许愿墙信息

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('addWishingWall', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/wishwall/wishwall/addWishingWall.htm?w.langCode=en-uk&w.memberEmail=test@milanoo.com&w.wishContent=more new Goods&w.memberFirstName=milanoo&w.memberLastName=milanoo';
       tester.get(__path(__filename) + 'w.langCode=en-uk&w.memberEmail=test@milanoo.com&w.wishContent=more new Goods&w.memberFirstName=milanoo&w.memberLastName=milanoo')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});