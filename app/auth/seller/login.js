/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;

var env = CONST.NILEOO_ADDRESS_TESTENV;
var tester = supertest.agent(env);
var fs = require('fs');

/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;

var env = CONST.NILEOO_ADDRESS_TESTENV;
var tester = supertest.agent(env);

describe('Nileoo卖家登录', function () {

    it('正常登录', function (done) {
        var url = __path(__filename, 1);
        var params = 'password=nileoo&username=admin'; /**&nyxSign=9C6918812567172F3A2FEECEA89CC355';*/
        tester.post(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("success.");
                    return body;
                }).then(body => {
                    expect(body.code).equal("0");
                    expect(body.sellerInfo.status).equal(0);
                    expect(body.sellerInfo.sellerVo.userName).equal("admin");
                    expect(body.sellerInfo.sellerVo.status).equal(0);
                    expect(body.sellerInfo.menuVos.length).least(1);
                    expect(body.sellerInfo.menuVos[0].children.length).least(1);
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});
