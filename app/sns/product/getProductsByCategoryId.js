//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7811
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** sns 根据分类ID查询商品信息**/


/**
参数名称         |          参数类型         |          参数说明
categoryId         |          String         |          商品分类ID，不能为空，为0时默认查询所有
languageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点ID，为空时默认为主站
pageNo         |          Integer         |          第几页，不能为空
pageSize         |          Integer         |          每页大小， 不能为空
sort         |          String         |          排序方式，为空时默认按照积分从低到高排列

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getProductsByCategoryId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/getProductsByCategoryId.htm?categoryId=0&languageCode=en-uk&websiteId=1&pageNo=1&pageSize=20';
       tester.get(__path(__filename) + 'categoryId=0&languageCode=en-uk&websiteId=1&pageNo=1&pageSize=20')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});