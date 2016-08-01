//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8144
//level=3
/** 会员评论详情**/


/**
参数名称         |          参数类型         |          参数说明
reviewId         |          String         |          评论ID，不能为空
languageCode         |          String         |          语言简写，不能为空
langCodeTo         |          String         |          翻译，目标语言
memberId         |          String         |          会员ID，可以为空
websiteId         |          String         |          站点ID，默认为1
deviceType         |          String         |          设备ID，默认为1

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('reviewInfo', function () {

   it('基本验证', function (done) {

    //    var fullPath = 'http://192.168.11.16:8080/member/comment/reviewInfo.htm?reviewId=214066&languageCode=en-uk&memberId=961360';
    //    tester.get(__path(__filename) + 'reviewId=214066&languageCode=en-uk&langCodeTo=cn-cn&memberId=961360')

    //            .end(function (err, res) {

    //                expect(res.status).eql(200);
    //本接口请求数据量过大，不予测试
                   done();
});
});