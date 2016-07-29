//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6137
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”
websiteId         |          String         |          站点ID，不能为空
days         |          String         |          天数。如果七天之内，就传7。非数字或者0查询全部。
pageNo         |          String         |          第几页，只能是数字并且大于等于1
pageSize         |          String         |          查询几条记录，如果为0，查询全部，只能是数字

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('会员QA列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/comment/myQAs.htm?memberId=115935&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=115935&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});