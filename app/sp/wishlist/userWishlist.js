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
    var path = '/' + fArray[fArray.length - 3] + '/' + 　fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    return path;
}

var tester = supertest.agent('http://app.milanoo.com');

describe("Wish List的获取", function () {
    it("常规验证", function (done) {
        tester
            .get(__path() + 'websiteId=1&memberId=3661799&sort=new&langCode=us')
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                should.equal(res.body.code, "0", JSON.stringify(res.body));
                done();
            });
    });
});
