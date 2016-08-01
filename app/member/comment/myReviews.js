//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8143
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 会员评论列表**/


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
languageCode         |          String         |          语言简写，不能为空。 如 “en-uk”
websiteId         |          String         |          站点ID，不能为空
days         |          String         |          天数。如果七天之内，就传7。非数字或者0查询全部。
pageNo         |          String         |          第几页，只能是数字并且大于等于1，默认为1
pageSize         |          String         |          查询几条记录，如果为0，查询全部，只能是数字，默认为10
deviceType         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('myReviews', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/comment/myReviews.htm?memberId=3214999&languageCode=en-uk&websiteId=1';
       tester.get(__path(__filename) + 'memberId=3214999&languageCode=en-uk&websiteId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});