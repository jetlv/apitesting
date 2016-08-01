//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8112
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询cms类目及子类目**/


/**
参数名称         |          参数类型         |          参数说明
cmsId         |          String         |          CMS类目ID，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('categoryByCmsId', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/cms/category/categoryByCmsId.htm?cmsId=11';
       tester.get(__path(__filename) + 'cmsId=11')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});