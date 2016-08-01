//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8375
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 搜索话题标签**/


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          用户ID，由于目前不考虑用户最近购买的品牌，所以，此用户id可以为空
keyWords         |          String         |          关键字，不能能为空
num         |          Integer         |          限制返回的条数，默认为20
action         |          String         |          发布时调用为：publish，为空或其它：list(默认)

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('searchTopicTag', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barLabel/searchTopicTag.htm?userid=1&keyWords=活动&action=publish';
       tester.get(__path(__filename) + 'userid=1&keyWords=活动&action=publish')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});