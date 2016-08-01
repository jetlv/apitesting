//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8137
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询类目展示方式
     返回类目类型：DCP：旧的dcp；NEWDCP：新的dcp；COMMON：普通页面**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，默认1
languageCode         |          String         |          语言，默认en-uk
deviceType         |          String         |          终端类型，默认1
categoryId         |          String         |          类目，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('productsCategoryShowType', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/nb/dcp/productsCategoryShowType.htm?websiteId=1&languageCode=en-uk&deviceType=1&categoryId=502';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&deviceType=1&categoryId=502')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});