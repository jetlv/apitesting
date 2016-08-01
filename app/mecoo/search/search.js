//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8379
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** Mecoo站搜索接口**/


/**
参数名称         |          参数类型         |          参数说明
s         |          MecooSearch         |          <pre>
  s.searchContent: 搜索内容，和s.propertyIds不能同时为空
  s.propertyIds: 非销售Id，格式：属性ID1,属性选项ID1@属性ID2,属性选项ID2，和s.searchContent不能同时为空
  s.categoryId: 分类ID，多个以,分隔，可以为空
  s.dramaId: 剧集ID，多个以,分隔
  s.roleId: 角色ID，多个以,分隔，可以为空
  s.brandId: 品牌ID，多个以,分隔，可以为空
  s.resultType: 搜索结果类型：1套装、2单品，为空时不限
  s.sortObject: 字段名和排序方式，如：recommend:0,addedTime:0,sortPrice:1，其中1表示升序、0表示倒序，默认为recommend:0
  s.pageSize: 当前页码，默认为1
  s.pageNo: 每页记录数，默认为20
  s.deviceType: 设备类型，默认为1
  s.cookieId: 用于记录搜索历史，为空时不记录
  s.memberId: 用户登录后不能为空，用于记录搜索历史
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('search', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/search/search.htm?s.cookieId=79f5e330877cbcf817d25b5883acdf76&s.searchContent=佐助';
       tester.get(__path(__filename) + 's.cookieId=79f5e330877cbcf817d25b5883acdf76&s.searchContent=佐助')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});