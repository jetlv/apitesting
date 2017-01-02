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

describe('买家反馈', function () {

    it('正常反馈', function (done) {
        var url = __path(__filename, 1);
        var params = 'buyerId=1&languageCode=en-uk&content=Nothing&deviceType=1&title=hehe';
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.msg).equal("success.");
                    return body;
                }).then(body => {
                    expect(body.code).equal("0");
                    expect(body.result).is.true;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});
