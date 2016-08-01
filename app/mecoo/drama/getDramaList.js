//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8390
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 通过类型分页查询剧集，注意：只返回有商品的剧集**/


/**
参数名称         |          参数类型         |          参数说明
type         |          Integer         |          剧集类型ID:1日漫、2美漫、3国漫、4游戏，为空是不限
pageNo         |          Integer         |          默认为1
pageSize         |          Integer         |          默认为24
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getDramaList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/drama/getDramaList.htm?type=&pageNo=1&pageSize=24';
       tester.get(__path(__filename) + 'type=&pageNo=1&pageSize=24')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});