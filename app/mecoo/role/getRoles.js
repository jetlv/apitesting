//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8332
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
type         |          Integer         |          1:搜索推荐、2:注册推荐关注，可以为空
sex         |          Integer         |          角色类别：1男、2女

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询角色列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/role/getRoles.htm?type=1&sex=1';
       tester.get(__path(__filename) + 'type=1&sex=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});