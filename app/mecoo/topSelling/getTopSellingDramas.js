//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8421
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
curDramaId         |          Integer         |          当前应被排除的剧集ID
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1
dramasNum         |          Integer         |          返回剧集数量，为空默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('热卖剧集：除当前剧集本身外，平台一月内热销的前5个剧集，热销从商品数量上来判断，不以价格为判断依据。
 
 当前暂时没有销量，按照新建剧集获得', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/topSelling/getTopSellingDramas.htm?dramasNum=15&deviceType=1';
       tester.get(__path(__filename) + 'dramasNum=15&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});