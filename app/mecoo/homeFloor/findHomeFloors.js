//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8355
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 得到首页楼层信息**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          用户ID
homeType         |          Integer         |          网站类型 1为PC站 2为WAP站 3为通用，不可为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('findHomeFloors', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/homeFloor/findHomeFloors.htm?homeType=1';
       tester.get(__path(__filename) + 'homeType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});