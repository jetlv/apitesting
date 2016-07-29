//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6081
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”
pid         |          String         |          父类型ID，如果为0，查询所有一级类型，如果为-1，查询全部类型，不能为空
classKey         |          String         |          类型key
pageNo         |          String         |          第几页，只能是数字并且大于等于1
pageSize         |          String         |          查询几条记录，如果为0，查询全部，只能是数字

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('咨询类型', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/advisory/findConsultation.htm?websiteId=1&languageCode=en-uk&pid=0&classKey=key&pageNo=1&pageSize=12';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&pid=0&classKey=key&pageNo=1&pageSize=12')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});