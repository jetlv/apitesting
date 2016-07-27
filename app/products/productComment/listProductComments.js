/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;

var tester = R.supertest.agent('http://app.milanoo.com');
/**
 * 暂时未上线待做
 */
 
describe('商品评论&图片', function () {
    it('根据id查询商品评论以及图片', function (done) {
        tester.get(__path(__filename) + 'productIds=484557&websiteId=1&languageCode=en-uk&pageNo=1&pageSize=60')
            .expect(200)
            .end(function (err, res) {
                var fp = __path(__filename) + 'productIds=484557&websiteId=1&languageCode=en-uk&pageNo=1&pageSize=60';
                // R.observableDiff(expected, res.body, function(d) {
                //     expect(d, JSON.stringify(d).replace(/"/g, '\'')).is.not.ok;
                // });
                done();
            });
    });
});