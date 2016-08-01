//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5990
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询商品类目**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1。
langCode         |          String         |          语言代码
categoryIds         |          String         |          当前类目ID，多个以","分开

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProductCategory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/cosplayList/getProductCategory.htm?websiteId=4&langCode=en-uk&categoryIds=4815';
       tester.get(__path(__filename) + 'websiteId=4&langCode=en-uk&categoryIds=4815')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});