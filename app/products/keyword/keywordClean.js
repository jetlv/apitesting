//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6258
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** **/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          
websiteId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('keywordClean', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/keyword/keywordClean.htm?languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});