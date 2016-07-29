//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5977
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码
key         |          String         |          这个key用于区分大图，小图
topNum         |          String         |          首页top作品集展示数量
hotNum         |          String         |          首页热门作品集展示数量
newNum         |          String         |          首页最新作品集展示数量

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('cos站作品集前台首页列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/homePageList.htm?languageCode=en-uk&key=CosAnime3&hotNum=15&newNum=15&topNum=10&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&key=CosAnime3&hotNum=15&newNum=15&topNum=10&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});