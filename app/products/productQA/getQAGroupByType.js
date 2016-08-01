//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6212
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 以分类分组查询qa，默认各个分类查询前pageSize大小的记录。typeId所指定的分类则按pageNo、pageSize进行分页查询**/


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码，不能为空
productId         |          Integer         |          商品ID，不能为空
websiteId         |          Integer         |          站点ID，不能为空
typeId         |          Integer         |          分类ID，0：查询全部，不能为空
pageNo         |          Integer         |          第几页，不能为空，必须大于等于1
pageSize         |          Integer         |          页面大小，不能为空，必须大于等于1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getQAGroupByType', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productQA/getQAGroupByType.htm?languageCode=en-uk&productId=7805&websiteId=1&typeId=0&pageNo=1&pageSize=24';
       tester.get(__path(__filename) + 'languageCode=en-uk&productId=7805&websiteId=1&typeId=0&pageNo=1&pageSize=24')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});