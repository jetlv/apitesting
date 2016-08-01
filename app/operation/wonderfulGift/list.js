//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8126
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 查询奇葩礼物信息**/


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，数字
languageCode         |          String         |          语言代码
deviceType         |          String         |          终端类型，数字
memberId         |          String         |          会员ID，数字
type         |          String         |          查询类型，0：查询全部，1：查询已经抽奖用户，2：查询未抽奖用户，不能为空，数字
sort         |          String         |          排序，lucky：按抽奖时间、增加时间排序； newest：按增加时间排序；popular：按点击数、增加加时排序
pageNo         |          String         |          第几页，数字，默认1
pageSize         |          String         |          页面大小，数字，默认16

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('list', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/operation/wonderfulGift/list.htm?websiteId=1&languageCode=en-uk&deviceType=1&memberId=3&type=0';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&deviceType=1&memberId=3&type=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});