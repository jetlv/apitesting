//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8360
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          用户ID,不能为空
currentPage         |          Integer         |          当前页码,为空时默认为1
pageSize         |          Integer         |          每页条数,为空时默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('得到ME圈我的分享列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/getMySharedList.htm?userid=3&currentPage=1&pageSize=10';
       tester.get(__path(__filename) + 'userid=3&currentPage=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});