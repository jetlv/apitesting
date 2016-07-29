//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8424
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          用户ID
cookieId         |          String         |          cookie id,不可为空
productsNum         |          Integer         |          返回商品数量,默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获得推荐商品列表
 
 三层逻辑，一是最近查看过的商品，二是用户最近搜索，三是用户关注的角色，此三种数据随机推荐；
 如果前三种都没数据，或者是数据不够，则在相应的数据后面展示除本单品外最近添加的。注意不要在一页展示2个一样的商品。', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/recommend/getRecommendedProducts.htm?memberId=3443529&searchContent=秦&productsNum=10&cookieId=1';
       tester.get(__path(__filename) + 'memberId=3443529&searchContent=秦&productsNum=10&cookieId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});