//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5983
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** #16790  【垂直站】Cosplay垂直站商品详情页的面包屑需要展示出商品所属作品集
 
 根据条件查询作品集相关信息，主要用于商品详情页的导航条**/


/**
参数名称         |          参数类型         |          参数说明
attributeId         |          String         |          属性Id,为空时默认为101415
productId         |          String         |          商品ID，不能为空
languageCode         |          String         |          语言编码，不能为空
key         |          String         |          作品集类型： CosAnime3表示小图，CosAnime2表示大图，CosAnime1表示描述, 为空时默认为小图

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getAttributeInfoById', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/satellite/attributeFunction/getAttributeInfoById.htm?attributeId=101415&productId=144944&languageCode=en-uk&websiteIdLastView=1';
       tester.get(__path(__filename) + 'attributeId=101415&productId=144944&languageCode=en-uk&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});