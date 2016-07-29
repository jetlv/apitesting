//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6204
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，非数字默认为1
productId         |          String         |          当前浏览的商品ID
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”
recentHistoryPid         |          String         |          最近浏览商品ID,多个ID用”,”分隔，如：”234,345,34”
returnRelatedNum         |          String         |          返回类目相关商品推荐数量

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('最近浏览及相关产品推荐', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productRecommend/recentHistoryRecommend.htm?productId=243180&recentHistoryPid=389945,331306,15459,229214,125622,386371&returnRelatedNum=12&languageCode=en-uk&websiteIdLastView=1';
       tester.get(__path(__filename) + 'productId=243180&recentHistoryPid=389945,331306,15459,229214,125622,386371&returnRelatedNum=12&languageCode=en-uk&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});