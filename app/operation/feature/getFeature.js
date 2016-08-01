//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8474
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询专题信息及商品信息
     价格按照指定货币进行换算了**/


/**
参数名称         |          参数类型         |          参数说明
featureId         |          String         |          专题id，不能与customUrl同时为空，数字
customUrl         |          String         |          自定义链接，不能与featureId同时为空
websiteId         |          String         |          站点，不能为空，数字
languageCode         |          String         |          语言代码，不能为空
currency         |          String         |          货币代码，站点9可以为空，其他不能为空
featureCateId         |          String         |          专题分类id，数字，默认取第一个
pageNo         |          String         |          第几页，数字，默认1
pageSize         |          String         |          页面大小，数字，默认40
deviceType         |          String         |          终端类型
repeatFlag         |          Integer         |          专题商品是否可重复显示，1可以，其他不可以 [需求 #36216]

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getFeature', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/feature/getFeature.htm?featureId=1&websiteId=1&languageCode=en-uk&currency=USD&deviceType=1';
       tester.get(__path(__filename) + 'featureId=1&websiteId=1&languageCode=en-uk&currency=USD&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});