//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8319
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
threadId         |          Integer         |          帖子ID，不可为空
pageNo         |          Integer         |          当前页码,默认为1
pageSize         |          Integer         |          每页记录数,默认为3

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('得到帖子下的第一层评论', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/threadComment/findFirstLevelThreadComment.htm?threadId=1&pageNo=1&pageSize=3';
       tester.get(__path(__filename) + 'threadId=1&pageNo=1&pageSize=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});