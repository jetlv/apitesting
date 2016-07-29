//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6226
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
id         |          Integer         |          不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点ID，为空时默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('#17699 EDM邮件群发内容转2.0', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/email/EDMEmail.htm?id=23&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'id=23&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});