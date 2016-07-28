//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6901


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');



describe('接口说明查询评论的图片', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://app.milanoo.com/app/o2o/review/reviewPictures.htm?websiteId=7&languageCode=fr-fr&returnNum=5';
       tester.get(__path(__filename) + 'websiteId=7&languageCode=fr-fr&returnNum=5')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});