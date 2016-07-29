//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8434
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
wholesaleRequest         |          WholesaleRequest         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/crm/wholesaleRequest/addWholesaleRequest.htm?wholesaleRequest.companyStoreName=store&wholesaleRequest.phone=119&wholesaleRequest.email=zzz@milanoo.com&wholesaleRequest.lang=en-uk&wholesaleRequest.websiteId=1';
       tester.get(__path(__filename) + 'wholesaleRequest.companyStoreName=store&wholesaleRequest.phone=119&wholesaleRequest.email=zzz@milanoo.com&wholesaleRequest.lang=en-uk&wholesaleRequest.websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});