//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6241
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
skuId         |          Integer         |          
unit         |          String         |          定制参数的单位，值只能是cm或in或null，为null时单位默认为cm。
languageCode         |          String         |          
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据SKUID和语言查询SKU信息和商品英文下的基本信息(需求 #16248)', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getProductAndSkuInfo.htm?skuId=2431&languageCode=en-uk&websiteId=1&unit=cm';
       tester.get(__path(__filename) + 'skuId=2431&languageCode=en-uk&websiteId=1&unit=cm')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});