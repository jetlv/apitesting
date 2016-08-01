//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8391
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询剧集下的商品信息，包含：商品列表、角色汇总、COS热销套装信息**/


/**
参数名称         |          参数类型         |          参数说明
dramaId         |          Integer         |          剧集ID，不能为空
roleId         |          Integer         |          角色ID，可以为空
memberId         |          Integer         |          用户登录后不能为空
pageNo         |          Integer         |          单品页码，默认为1
pageSize         |          Integer         |          单品每页显示数量，默认为40
cosPageNo         |          Integer         |          COS套装页码，默认为1
cosPageSize         |          Integer         |          COS套装每页显示数量，默认为20
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getDramaProducts', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/drama/getDramaProducts.htm?dramaId=1&pageNo=1&pageSize=40&memberId=&cosPageNo=1&cosPageSize=20';
       tester.get(__path(__filename) + 'dramaId=1&pageNo=1&pageSize=40&memberId=&cosPageNo=1&cosPageSize=20')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});