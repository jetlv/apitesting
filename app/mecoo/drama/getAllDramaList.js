//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8432
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询所有剧集，注意：返回的剧集可能没有商品**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          不为空时过滤此用户已关注过的剧集
pageNo         |          Integer         |          默认为1
pageSize         |          Integer         |          默认为24
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getAllDramaList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/drama/getAllDramaList.htm?memberId=1&pageNo=1&pageSize=24';
       tester.get(__path(__filename) + 'memberId=1&pageNo=1&pageSize=24')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});