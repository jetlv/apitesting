//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5863
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
iPadId         |          Integer         |          设备ID，不为空时将判断该设备是否需要更新，如需要更新则返回所有图片URL并关闭是否更新标记
websiteId         |          Integer         |          站点id，不能为空
languageCode         |          String         |          语言编码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取O2O APP站所有商品的图片的URL', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/o2o/products/getAllPicturesUrl.htm?websiteId=8&languageCode=fr-fr';
       tester.get(__path(__filename) + 'websiteId=8&languageCode=fr-fr')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});