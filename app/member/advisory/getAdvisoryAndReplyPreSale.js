//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6088
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据条件查询咨询及回复(售前)**/


/**
参数名称         |          参数类型         |          参数说明
id         |          String         |          咨询id
langCode         |          String         |          
memberId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getAdvisoryAndReplyPreSale', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/advisory/getAdvisoryAndReplyPreSale.htm?id=21343&langCode=en-uk&memberId=15497';
       tester.get(__path(__filename) + 'id=21343&langCode=en-uk&memberId=15497')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});