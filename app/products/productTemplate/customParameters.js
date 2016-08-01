//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6260
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 定制参数模板
 根据接口传入的商品ID、语言编码 返回商品对应定制参数模板相关信息（必需要激活状态才返回）。**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1
productId         |          String         |          商品ID，不能为空
languageCode         |          String         |          语言简写，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('customParameters', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productTemplate/customParameters.htm?productId=243180&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'productId=243180&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});