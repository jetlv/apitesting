//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8113
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
featureId         |          String         |          专题id，不能为空，数字
websiteId         |          String         |          站点，不能为空，数字
languageCode         |          String         |          语言代码，不能为空
currency         |          String         |          货币代码，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询专题信息及商品信息
     价格按照指定货币进行换算了', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/feature/getFeature.htm?featureId=1&websiteId=1&languageCode=en-uk&currency=USD';
       tester.get(__path(__filename) + 'featureId=1&websiteId=1&languageCode=en-uk&currency=USD')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});