//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8020


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('统计不可商品预约试穿时间段', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/appointTimeCannotUse.htm?appointTime=2014-05-05';
       tester.get(__path(__filename) + 'appointTime=2014-05-05')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});