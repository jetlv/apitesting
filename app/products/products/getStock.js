//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6239
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** **/


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          
languageCode         |          String         |          
websiteId         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getStock', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getStock.htm?productId=243180&languageCode=en-uk&websiteIdLastView=1';
       tester.get(__path(__filename) + 'productId=243180&languageCode=en-uk&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});