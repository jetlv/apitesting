//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6263
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据类别标志查询咨询分类**/


/**
参数名称         |          参数类型         |          参数说明
inquiryType         |          String         |          
languageCode         |          String         |          语言编码
websiteId         |          String         |          站点，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findInquiryCategory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/inquiry/findInquiryCategory.htm?inquiryType=Dispute&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'inquiryType=Dispute&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});