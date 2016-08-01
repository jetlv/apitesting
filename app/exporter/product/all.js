//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5938
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询商品**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空
langCode         |          String         |          语言代码，不能为空
categoryId         |          String         |          类目ID，可选
activate         |          String         |          是否激活，null：查询全部，0：激活；1：未激活
startTime         |          String         |          开始时间戳，可选，以秒为单位，用于查询修改时间
endTime         |          String         |          结束时间戳，可选，以秒为单位，用于查询修改时间
pageNo         |          String         |          第几页，如果空默认为1
pageSize         |          String         |          每页大小，如果空默认为50

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('all', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/product/all.htm?websiteId=1&langCode=en-uk&categoryId=392&activatge=0';
       tester.get(__path(__filename) + 'websiteId=1&langCode=en-uk&categoryId=392&activatge=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});