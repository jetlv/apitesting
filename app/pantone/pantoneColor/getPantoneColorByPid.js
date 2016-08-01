//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5995
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 获取潘通色卡PRD颜色属性值（名称）色卡编号HTML颜色代码接口**/


/**
参数名称         |          参数类型         |          参数说明
pId         |          Integer         |          商品的ID号

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPantoneColorByPid', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/pantone/pantoneColor/getPantoneColorByPid.json?pId=243180';
       tester.get(__path(__filename) + 'pId=243180')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});