/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;


var env = CONST.APP_ADDRESS_TESTENV;
var tester = supertest.agent(env);


describe('高定-选项获取', function () {

    it('基础验证-中文', function (done) {
        var url = __path(__filename);
        var params = 'languageId=1';
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var result = res.body.result;
                    expect(result.length).equal(8);
                    resolve(res.body);
                }).then(body => {
                    expect(body.msg).equal("操作成功");
                    return body;
                }).then(body => {
                    expect(body.code).equal("0");
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
                });
            });
    });
});
