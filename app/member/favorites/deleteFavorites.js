//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6122
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
ids         |          String         |          收藏ID，可以有多个，以“,”分开，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('删除会员收藏信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/favorites/deleteFavorites.htm?ids=21';
       tester.get(__path(__filename) + 'ids=21')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});