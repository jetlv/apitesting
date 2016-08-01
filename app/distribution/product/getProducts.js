//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5946
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询商品信息**/


/**
参数名称         |          参数类型         |          参数说明
params         |          DistributionParams         |          参数，详见如下：<br>
  params.langId 语言Id，不能为空；<br>
  params.websiteId 站点Id默认为主站1； <br>
  params.categoryId 分类Id，可以为空；
      注意：params.categoryId参数值应包含在params.precondition.inclusiveCateogryIds参数值中或是其子分类Id； <br>
  params.productIds 商品id串(用逗号分隔)，可以为空；<br>
  params.productCodes 商品code串(用逗号分隔)，可以为空；<br>
  params.productActivator 当前语言站商品上下架状态：1在架、0普通下架、null不限； <br>
  params.precondition.inclusiveCateogryIds 包含的分类id串：同时也包含相应子分类(用逗号分隔)，不能为空； <br>
  params.precondition.exclusiveCategoryIds 不包含的分类id串：同时也不包含相应子分类(用逗号分隔)，可以为空； <br>
  params.precondition.inclusiveProductIds 包含的商品id串(用逗号分隔)，可以为空； <br>
  params.precondition.exclusiveProductIds 不包含的商品id串(用逗号分隔)，可以为空； <br>
  params.pageNo 当前页码，默认为1；<br>
  params.pageSize 每页数据数，默认为24；<br>
  params.source 分销商系统操作来源：1前台、0后台; 操作来源为后台时将不验证规则，即不验证params.precondition相关参数，此时params.categoryId、params.productIds、params.productCodes不能全为空。<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProducts', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/distribution/product/getProducts.json?params.langId=2&params.categoryId=842&params.precondition.inclusiveCateogryIds=786,822,844&params.precondition.exclusiveCategoryIds=836';
       tester.get(__path(__filename) + 'params.langId=2&params.categoryId=842&params.precondition.inclusiveCateogryIds=786,822,844&params.precondition.exclusiveCategoryIds=836')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});