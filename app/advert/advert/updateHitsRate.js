//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6073
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
advertUpdateStr         |          String         |          json串，格式如：[{'advertId':广告ID, 'hits':点击增加次数, 'showTimes': 显示增加次数}]

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('更新广告的显示次数、点击次数，同时更新广告的点击率。', function () {

   it('基本验证', function (done) {

       var fullPath = "http://192.168.11.16:8080/advert/advert/updateHitsRate.htm?advertUpdateStr=[{'advertId':105, 'hits':5, 'showTimes': 2}]";
       tester.get(__path(__filename) + "advertUpdateStr=[{'advertId':105, 'hits':5, 'showTimes': 2}]")

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});