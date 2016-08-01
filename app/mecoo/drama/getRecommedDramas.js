//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8388
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取首页推荐剧集**/


/**
参数名称         |          参数类型         |          参数说明
num         |          Integer         |          每个大类型发返回剧集数量，默认为3
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getRecommedDramas', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/drama/getRecommedDramas.htm?num=3';
       tester.get(__path(__filename) + 'num=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});