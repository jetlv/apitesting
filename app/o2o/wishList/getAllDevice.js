//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5860


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('接口说明获取所有设置信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/wishList/getAllDevice.htm';
       tester.get(__path(__filename) + 'undefined')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});