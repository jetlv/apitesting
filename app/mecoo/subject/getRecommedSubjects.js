//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8302
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
num         |          Integer         |          返回的数量，默认为3

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取首页推荐热销COS列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/subject/getRecommedSubjects.htm?num=3';
       tester.get(__path(__filename) + 'num=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});