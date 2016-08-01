//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8392
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取剧集标签(话题)数据**/


/**
参数名称         |          参数类型         |          参数说明
currentPage         |          Integer         |          当前页码,为空默认为1
pageSize         |          Integer         |          每页条数，为空默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getDramaTopicList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barLabel/getDramaTopicList.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});