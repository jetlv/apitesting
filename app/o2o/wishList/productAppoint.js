//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5862


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('接口说明商品预约试穿', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/wishList/productAppoint.htm?userName=8&appointTime=1369864564&phone=1298&email=165456@1651.com&remark=asdkfj';
       tester.get(__path(__filename) + 'userName=8&appointTime=1369864564&phone=1298&email=165456@1651.com&remark=asdkfj')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});