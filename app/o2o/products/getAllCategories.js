//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5864


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('获取O2O APP站所有分类及子分类信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/products/getAllCategories.htm?websiteId=8&languageCode=fr-fr';
       tester.get(__path(__filename) + 'websiteId=8&languageCode=fr-fr')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});