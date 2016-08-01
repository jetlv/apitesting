//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8410
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 详情页查询商品运费，并判断该商品是否包邮，包邮情况：单品免邮、非折扣券免邮、自动使用折扣券免邮，全免才算免邮。**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，为空默认为1
productId         |          String         |          商品ID，不能为空
num         |          String         |          商品个数，不能为空
countryId         |          String         |          目的国家，不能为空
langCode         |          String         |          语言标志，不能为空
priceUnit         |          String         |          要转换的目标货币单位，不能为空
unitPrice         |          Double         |          商品单价(详情页最终卖价)，为空时不计算运费优惠金额，注意是当前货币priceUnit的金额
deviceType         |          Integer         |          设备类型，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProducsTransportPrice', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/transPort/getProducsTransportPrice.htm?productId=2917&num=1&websiteId=1&langCode=en-uk&countryId=1&priceUnit=USD';
       tester.get(__path(__filename) + 'productId=2917&num=1&websiteId=1&langCode=en-uk&countryId=1&priceUnit=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});