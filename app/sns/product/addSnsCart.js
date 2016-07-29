//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7813
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
productId         |          Integer         |          商品ID，不能为空
memberId         |          Integer         |          会员ID，不能为空
inventoryPropertyArr         |          String         |          库存属性，json数组，格式如下：
							            [
							                    property{
							                        propertyId：属性ID
							                        propertyValue：属性值，如：size1、size2等式
							                    }
							                    ………
							            ]
customPropertyIds         |          String         |          定制属性ID
customArgs         |          String         |          定制参数
languageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点ID，为空时默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('向sns购物车中加入商品', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/addSnsCart.htm?productId=99828&memberId=2105475&inventoryPropertyArr=[{%27propertyId%27:187,%27propertyValue%27:%27size6%27}]&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'productId=99828&memberId=2105475&inventoryPropertyArr=[{%27propertyId%27:187,%27propertyValue%27:%27size6%27}]&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});