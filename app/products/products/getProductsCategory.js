//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6229
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
parentCategoryId         |          String         |          父类目，空或者0查询全部。
languageCode         |          String         |          语言编码，不能为空。
websiteId         |          String         |          站点标志，为空默认1。
returnLevel         |          Integer         |          数字类型，指定返回下层分类层数。
                            该值在returnChildNum没有值时才会起作用，该值必须为-1或者大于0的数字，-1代表返回所有子级，其他的返回相应层数的所有子级。
returnChildNum         |          String         |          返回各层级子节点数量。
 							     如：5:-1:5 表示第一级返回5个分类、第二层返回所有分类、第三层返回5个分类。-1：代表不限。
activate         |          String         |          是否激活，null：查询全部，0：激活；1：未激活

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('根据传入的参数返回相应的类目数据，适用于所有与类目相关的接口
 根据父类目、语言代码及数量，查询所需条数的类目结果。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/products/getProductsCategory.htm?parentCategoryId=0&languageCode=en-uk&returnChildNum= -1:-1:-1&activate=0&websiteIdLastView=1';
       tester.get(__path(__filename) + 'parentCategoryId=0&languageCode=en-uk&returnChildNum= -1:-1:-1&activate=0&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});