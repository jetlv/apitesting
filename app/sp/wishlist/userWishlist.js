/// <reference path="../../../include.d.ts" />

var supertest = require('supertest');
var should = require("should");
var assert = should.assert;


var tester = supertest.agent('http://app.milanoo.com');

describe("测试Wish List的获取接口", function () {
    it("常规验证", function (done) {
        tester
            .get('/sp/wishlist/userWishlist.htm?websiteId=1&memberId=3661799&sort=new&langCode=us')
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                should.equal(res.body.code, "0", JSON.stringify(res.body));
                done();
            });
    });
});
