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


describe('Nileoo查询异常', function () {

    it('查询指定异常', function (done) {
        done();
    //     var url = __path(__filename, 1);
    //     var orderId = 33;
    //     var params = 'orderId=' + orderId;
    //     tester.get(url + params)
    //         .end(function (err, res) {
    //             new Promise(function (resolve, reject) {
    //                 var body = res.body;
    //                 resolve(body);
    //             }).then(body => {
    //                 expect(body.msg).equal("success.");
    //                 return body;
    //             }).then(body => {
    //                 expect(body.code).equal("0");
    //                 var result = body.result;
    //                 expect(result.dataStatus).equal(0);
    //                 expect(result.orderId).equal(33);
    //                 expect(result.id).equal(24);
    //                 expect(result.creatorMember).equal(3);
    //                 expect(result.remark).equal("ErJtGWeE");
    //                 expect(result.abnormalLogs[0].comment).equal("ErJtGWeE");
    //                 done();
    //                 return body;
    //             }).catch(err => {
    //                 done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + JSON.stringify(res.body) + '\r\n');
    //             });
    //         });
    });
});
