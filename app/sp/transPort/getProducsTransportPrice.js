//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6024
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，为空默认为1
productId         |          String         |          商品ID，不能为空
num         |          String         |          商品个数，不能为空
countryId         |          String         |          目的国家，不能为空
langCode         |          String         |          语言标志，不能为空
priceUnit         |          String         |          要转换的目标货币单位，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('详情页查询商品运费', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/transPort/getProducsTransportPrice.htm?productId=2917&num=1&websiteId=1&langCode=en-uk&countryId=1&priceUnit=USD';
       tester.get(__path(__filename) + 'productId=2917&num=1&websiteId=1&langCode=en-uk&countryId=1&priceUnit=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});