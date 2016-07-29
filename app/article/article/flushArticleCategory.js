//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5965
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('刷新文档栏目', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/article/article/flushArticleCategory.htm';
       tester.get(__path(__filename) + '')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});