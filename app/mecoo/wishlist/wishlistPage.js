//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8409
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 分页查询套装收藏信息**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          登录后不能为空
cookieId         |          String         |          不能和memberId同时为空
sort         |          String         |          排序，目前值仅支持 new 收藏时间降序，默认为收藏时间升序
deviceType         |          Integer         |          用于获取不同设备套装图片尺寸，默认为1
pageNo         |          Integer         |          默认为1
pageSize         |          Integer         |          默认为24

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('wishlistPage', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/wishlist/wishlistPage.htm?memberId=2267805&cookieId=&sort=new&deviceType=1&pageNo=1&pageSize=12';
       tester.get(__path(__filename) + 'memberId=2267805&cookieId=&sort=new&deviceType=1&pageNo=1&pageSize=12')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});