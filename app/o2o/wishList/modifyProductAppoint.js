//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8520


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('修改品类和材质[需求 #37016]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/wishList/modifyProductAppoint.htm?categoryType=1&stilType=2&stoffType=3';
       tester.get(__path(__filename) + 'categoryType=1&stilType=2&stoffType=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});