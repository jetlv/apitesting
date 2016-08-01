//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7259
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询评论的图片**/


/**
参数名称         |          参数类型         |          参数说明
proWebsiteId         |          String         |          商品站点ID，不能为空
reviewWebsiteId         |          String         |          评论站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
reviewIds         |          String         |          评论ID，如果不传，自动使用默认数据，多个以“,”分开
returnNum         |          String         |          返回个数，空全部返回

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('review', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/o2o/review/reviewPictures.htm?proWebsiteId=8&reviewWebsiteId=7&languageCode=fr-fr&returnNum=5';
       tester.get(__path(__filename) + 'proWebsiteId=8&reviewWebsiteId=7&languageCode=fr-fr&returnNum=5')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});