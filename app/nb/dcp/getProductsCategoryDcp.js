//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5921
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          类目ID
languageCode         |          String         |          语言编码
rows         |          String         |          主题个数，默认8个
websiteId         |          String         |          站点ID，默认1
topNum         |          String         |          topselling商品个数，默认8个
newNum         |          String         |          新到货个数，默认8个

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('一级类目页面展示改造，包含如下区域：
 类目面包屑导航， 商品类目导航， Top selling区域，New arrival区域，Featured category区域，Sale区域', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/nb/dcp/getProductsCategoryDcp.htm?categoryId=391&languageCode=en-uk&rows=-1&websiteIdLastView=1&websiteId=1';
       tester.get(__path(__filename) + 'categoryId=391&languageCode=en-uk&rows=-1&websiteIdLastView=1&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});