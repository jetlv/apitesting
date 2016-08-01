//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7783
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** sns 广告列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
adType         |          String         |          广告类型，1：SNS，2：Blog，3：Video，不能为空
adSize         |          String         |          广告大小，1：200*200，2：728*90，3：160*600，为空查询全部
pageNo         |          String         |          页码，不能为空
pageSize         |          String         |          页面大小，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('adList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/advert/adList.htm?websiteId=1&languageCode=en-uk&adType=1&pageNo=1&pageSize=20';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&adType=1&pageNo=1&pageSize=20')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});