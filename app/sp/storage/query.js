//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6005
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询寄存商品**/


/**
参数名称         |          参数类型         |          参数说明
keyword         |          String         |          
categoryId         |          Integer         |          
memberId         |          Integer         |          
priceUnit         |          String         |          
pageNo         |          Integer         |          
pageSize         |          Integer         |          
languageCode         |          String         |          
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('query', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/storage/query.htm?websiteId=1&keyword=&categoryId=&memberId=2105243&priceUnit=USD&languageCode=en-uk&pageNo=1&pageSize=10';
       tester.get(__path(__filename) + 'websiteId=1&keyword=&categoryId=&memberId=2105243&priceUnit=USD&languageCode=en-uk&pageNo=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});