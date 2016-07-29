//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8356
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
num         |          Integer         |          每个大类型发返回剧集数量，默认为4

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('剧集集合页', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/drama/getCollectionDramas.htm?num=4';
       tester.get(__path(__filename) + 'num=4')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});