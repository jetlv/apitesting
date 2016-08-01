//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5980
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 前台单一作品集商品列表页－－Most Helpful Reviews**/


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          
languageCode         |          String         |          
websiteId         |          Integer         |          
attributeId         |          String         |          
attributeOptionId         |          String         |          
pageSize         |          Integer         |          
pageNo         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('listMostHelpComment', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/listMostHelpComment.htm?languageCode=en-uk&attributeOptionId=1526&attributeId=101415&pageNo=1&pageSize=5&websiteId=4&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&attributeOptionId=1526&attributeId=101415&pageNo=1&pageSize=5&websiteId=4&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});