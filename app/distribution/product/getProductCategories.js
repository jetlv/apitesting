//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5944
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
params         |          DistributionParams         |          参数，详见如下：<br>
  params.langId 语言Id，不能为空；<br>
  params.websiteId 站点Id默认为主站1； <br>
  params.precondition.inclusiveCateogryIds 包含的分类id串：同时也包含相应子分类(用逗号分隔)，不能为空； <br>
  params.precondition.exclusiveCategoryIds 不包含的分类id串：同时也不包含相应子分类(用逗号分隔)，可以为空。 <br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取分销商分类信息，一次性返回所以分类信息。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/distribution/product/getProductCategories.json?params.langId=2&params.precondition.inclusiveCateogryIds=786,822,844&params.precondition.exclusiveCategoryIds=836';
       tester.get(__path(__filename) + 'params.langId=2&params.precondition.inclusiveCateogryIds=786,822,844&params.precondition.exclusiveCategoryIds=836')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});