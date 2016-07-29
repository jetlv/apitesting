//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6090
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          咨询id
langCode         |          String         |          语言编码
memberId         |          String         |          会员id

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据条件查询咨询及回复(售后)', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/advisory/getAdvisoryAndReplyAfterSale.htm?id=5815&langCode=en-uk&memberId=56187';
       tester.get(__path(__filename) + 'id=5815&langCode=en-uk&memberId=56187')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});