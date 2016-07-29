//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8372
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          用户ID
currentPage         |          Integer         |          当前页码,为空默认为1
pageSize         |          Integer         |          每页条数，为空默认为10
isMyFavorite         |          Boolean         |          是否取用户喜欢的话题，为空时默认为false，如果为true则userid必须不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('获取标签(话题)列表数据
 1,普通话题列表是排除掉品牌类型的标签,显示图片按照 "先-设置标签时设置的'分享帖子ID'对应的主图片,后-标签对应的图片3张"的原则
 2,如果是我喜欢的,不排除掉品牌类型的标签', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barLabel/getTopicListData.htm?userid=3&isMyFavorite=1';
       tester.get(__path(__filename) + 'userid=3&isMyFavorite=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});