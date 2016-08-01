//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6188
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** mystory点击**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
langCode         |          String         |          语言编码，不能为空
storyId         |          String         |          故事ID，不能为空
memberId         |          String         |          会员ID，不能与ip同时为空。
ip         |          String         |          ip地址，不能与memberId同时为空
useFulSum         |          String         |          大于0：增加有用数
unUseFulSum         |          String         |          大于0：增加无用数
clickSum         |          String         |          大于0：增加点击数

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('storyLike', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mystory/story/storyLike.htm?websiteId=1&langCode=ru-ru&storyId=12&memberId=1&ip=10.124.45.126&useFulSum=1&clickSum=1';
       tester.get(__path(__filename) + 'websiteId=1&langCode=ru-ru&storyId=12&memberId=1&ip=10.124.45.126&useFulSum=1&clickSum=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});