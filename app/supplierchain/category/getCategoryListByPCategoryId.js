//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6071
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据父分类ID得到子分类列表**/


/**
参数名称         |          参数类型         |          参数说明
pCategoryId         |          Integer         |          父分类ID,如果取第一级分类，则传0
source         |          Integer         |          来源：0：供应商、其他：采集及内部，默认为供应商

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getCategoryListByPCategoryId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/supplierchain/category/getCategoryListByPCategoryId.json?pCategoryId=392';
       tester.get(__path(__filename) + 'pCategoryId=392')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});