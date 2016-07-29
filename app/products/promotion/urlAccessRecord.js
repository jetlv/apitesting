//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6218
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
promotionType         |          String         |          关键字
linkAddressUrl         |          String         |          访问地址
refererAddressURL         |          String         |          来源地址
refererAddressURLmd5         |          String         |          来源地址通过MD5加密后的字符串
websiteId         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据反关键字、访问地址、来源地址 记录页面访问情况', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/promotion/urlAccessRecord.htm?promotionType=test&linkAddressUrl=www.milanoo.com/sale&refererAddressURL=www.milanoo.com&refererAddressURLmd5=SEAFEAWGASEFAFADSFA&websiteId=1';
       tester.get(__path(__filename) + 'promotionType=test&linkAddressUrl=www.milanoo.com/sale&refererAddressURL=www.milanoo.com&refererAddressURLmd5=SEAFEAWGASEFAFADSFA&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});