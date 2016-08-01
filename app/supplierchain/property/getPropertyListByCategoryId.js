//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6056
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据分类ID得到其对应的属性列表(包含销售属性、老的非销售属性、新的非销售属性)**/


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          Integer         |          
source         |          Integer         |          来源：0：供应商、其他：采集及内部，默认为供应商

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getPropertyListByCategoryId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/property/getPropertyListByCategoryId.json?categoryId=392';
       tester.get(__path(__filename) + 'categoryId=392')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});