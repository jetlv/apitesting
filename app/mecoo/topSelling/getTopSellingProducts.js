//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8416
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
curProductId         |          Integer         |          当前需要排除的商品ID
productsNum         |          Integer         |          返回商品数量,默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获得热销单品列表 算法:除该单品外,目前平台一个月内卖得最好的单品。首先按数量先后顺序展示，当数量一致时，按新建时间倒序展示；
 由于目前没有销量，索引里也暂时没有建该商品对应的销量字段，故直接按照新建时间倒序展示的算法。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/topSelling/getTopSellingProducts.htm?productsNum=20&curProductId=537893';
       tester.get(__path(__filename) + 'productsNum=20&curProductId=537893')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});