//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5924
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询商品类目，从真实类目中提取有新到货或者热销商品的目录。**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1。
categoryId         |          String         |          当前类目ID
dataType         |          String         |          数据来源类型：1：新品；2：热销
languageCode         |          String         |          语言代码

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProductCategory', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/nb/product/getProductCategory.htm?dataType=2&categoryId=391&languageCode=en-uk&websiteId=1&websiteIdLastView=1';
       tester.get(__path(__filename) + 'dataType=2&categoryId=391&languageCode=en-uk&websiteId=1&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});