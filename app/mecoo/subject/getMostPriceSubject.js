//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8387
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过商品ID获取总价最高的一个套装信息**/


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          商品ID，不能为空
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getMostPriceSubject', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/subject/getMostPriceSubject.htm?productId=10286';
       tester.get(__path(__filename) + 'productId=10286')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});