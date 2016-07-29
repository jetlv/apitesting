//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6901
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
returnNum         |          String         |          返回个数，空全部返回

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询评论的图片', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/o2o/review/reviewPictures.htm?websiteId=7&languageCode=fr-fr&returnNum=5';
       tester.get(__path(__filename) + 'websiteId=7&languageCode=fr-fr&returnNum=5')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});