//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8480
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据语言简称返回所有国家的列表**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          Integer         |          站点ID，默认为1 -> [需求 #35551]
lang         |          String         |          语言，不为能为空
flag         |          String         |          获取国家名称，还是国家的flag，为数字时有效，并且只返回counties结果集
shippingFlag         |          Integer         |          是否可送达：1为可送达，0为不可送达，默认为不限

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getAllCounties', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getAllCounties.htm?lang=en-uk';
       tester.get(__path(__filename) + 'lang=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});