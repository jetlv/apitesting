//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5978
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 前台作品集列表页**/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码,不能为空
leftKey         |          String         |          表示文字描述的key,不能为空
returnNum         |          String         |          返回数量
attributeId         |          String         |          属性ID,不能为空
rightKey         |          String         |          代表图片的key,用于区分大、小图,不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('attributeFunctionDcp', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/attributeFunctionDcp.htm?languageCode=en-uk&returnNum=10&leftKey=CosAnime3&rightKey=CosAnime3&attributeId=101415&websiteIdLastView=1';
       tester.get(__path(__filename) + 'languageCode=en-uk&returnNum=10&leftKey=CosAnime3&rightKey=CosAnime3&attributeId=101415&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});