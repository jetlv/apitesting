/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 */
function __path() {
    var sep = CONST['SEP_' + os.platform()];
    var fArray = __filename.split(sep);
    var path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    return path;
}

var tester = supertest.agent('http://app.milanoo.com');

describe('登录', function () {
    it('普通用户登录', function (done) {
        var expected = {
            msg: "操作成功",
            code: "0",
            userState: 1,
            inviteCode: "uew9j",
            id: 3701417,
            type: "Personal"
        };
        tester.get(__path() + 'email=memberLoginTester@milanoo.com&pw=123456&websiteId=1&deviceType=1&loginIp=10.125.42.15')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                done();
            });
    });
});