//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6261
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('php后台获取属性、属性值（销售属性和新非销售属性）列表信息接口', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/sop/getPropertyForSopManage.json?languageCode=en-uk';
       tester.get(__path(__filename) + 'languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});