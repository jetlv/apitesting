/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var expect = require('chai').expect;

var tester = supertest.agent('http://app.milanoo.com');

describe('列表页及搜索接口', function () {
    it('根据id搜索单个商品', function (done) {
        var url = __path(__filename) + 'pcs.languageCode=en-uk&pcs.searchContent=307640';
        tester.get(url)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("操作成功");
                    return body;
                }).then(body => {
                    expect(body.code).equal("0");
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + url  + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});