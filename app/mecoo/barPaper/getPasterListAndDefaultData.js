//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8368
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取贴纸列表和默认数据**/


/**
参数名称         |          参数类型         |          参数说明
tagId         |          Integer         |          标签(话题ID),可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPasterListAndDefaultData', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barPaper/getPasterListAndDefaultData.htm?tagId=1';
       tester.get(__path(__filename) + 'tagId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});