//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8440
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 新品推荐：单品和套装都推荐，截至到最后上新那一天，倒推一个月的上新数据，按上新先后顺序排列**/


/**
参数名称         |          参数类型         |          参数说明
pageNo         |          Integer         |          当前页码,为空默认为1
pageSize         |          Integer         |          每页显示条数,为空默认为10
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getRecommendedNewItem', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/recommend/getRecommendedNewItem.htm?pageNo=1&pageSize=10&deviceType=3';
       tester.get(__path(__filename) + 'pageNo=1&pageSize=10&deviceType=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});