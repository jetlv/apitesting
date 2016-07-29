//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6297
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点id，默认为1
langCode         |          String         |          语言编码，不能为空
sort         |          String         |          排序方式，默认productNum,按模特商品数量排序；time：按更新时间排序。
pageNo         |          String         |          第几页
pageSize         |          String         |          每页大小

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('模特列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/model/modelList.htm?langCode=en-uk&pageNo=1&pageSize=16&sort=productNum&websiteIdLastView=1';
       tester.get(__path(__filename) + 'langCode=en-uk&pageNo=1&pageSize=16&sort=productNum&websiteIdLastView=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});