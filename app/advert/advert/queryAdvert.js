//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8468
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询广告位中的广告**/


/**
参数名称         |          参数类型         |          参数说明
positionIds         |          String         |          广告位ID串，以逗号隔开，如”1,2,3”，不能为空；
categoryId         |          Integer         |          商品分类ID，可以为空，为空是表示首页广告；
languageCode         |          String         |          语言编码，如”en-uk”，不能为空；
webType         |          Integer         |          终端类型，不能为空。
websiteId         |          Integer         |          站点ID，默认为主站。
crowd         |          String         |          人群的key，ALL表示全部
adIds         |          String         |          广告ID串，以,分隔

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('queryAdvert', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/advert/advert/queryAdvert.htm?positionIds=1,2,3&languageCode=en-uk&websiteId=1&webType=1';
       tester.get(__path(__filename) + 'positionIds=1,2,3&languageCode=en-uk&websiteId=1&webType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});