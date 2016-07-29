//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8359
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          用户ID
nowPage         |          Integer         |          当前页码,为空时默认为1
pageSize         |          Integer         |          每页条数,为空时默认为10
isMyFavorite         |          Boolean         |          是否只展示我赞过的,为空时默认为false,当传入为true时,userid不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('得到ME圈分享列表', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/getSharedList.htm?userid=3&isMyFavorite=true&nowPage=1&pageSize=10';
       tester.get(__path(__filename) + 'userid=3&isMyFavorite=true&nowPage=1&pageSize=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});