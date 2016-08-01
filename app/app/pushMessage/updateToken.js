//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7962
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 新增或更新APP设备Token**/


/**
参数名称         |          参数类型         |          参数说明
mt         |          MemberToken         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('updateToken', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/pushMessage/updateToken.htm?mt.token=3fdfedg2qfdfewtesdf&mt.lang=en-uk&mt.tokenType=0';
       tester.get(__path(__filename) + 'mt.token=3fdfedg2qfdfewtesdf&mt.lang=en-uk&mt.tokenType=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});