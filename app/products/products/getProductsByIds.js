/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var tester = supertest.agent('http://app.milanoo.com');

describe('查询商品', function () {
    it('根据id查询商品', function (done) {       
        tester.get(__path(__filename) + 'productIds=528763&websiteId=1&languageCode=en-uk&activate=1&isSolr=1&deviceType=1')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;          
                done();
            });
    });
});