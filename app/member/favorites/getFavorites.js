//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6121
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          String         |          站点ID，不能为空
cateIdSearch         |          String         |          用于搜索的类目ID，可为空，为空或者为0查询全部
keyword         |          String         |          关键词，可为空
pageNo         |          String         |          第几页，默认1
pageSize         |          String         |          每页大小，默认10
websiteShare         |          String         |          是否站点共享，1：共享（默认）；其他：不共享

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询会员收藏信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/favorites/getFavorites.htm?websiteIdLastView=1&memberId=2105243&languageCode=en-uk&websiteId=1&cateIdSearch=&keyword=&pageNo=1&pageSize=8&websiteShare=0';
       tester.get(__path(__filename) + 'websiteIdLastView=1&memberId=2105243&languageCode=en-uk&websiteId=1&cateIdSearch=&keyword=&pageNo=1&pageSize=8&websiteShare=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});