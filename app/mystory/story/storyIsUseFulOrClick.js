//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6185
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
storyId         |          String         |          故事ID，不能为空
useFul         |          String         |          是否有用，只有两个有效值：yes或者no，yes代表有用，no代表无用，其他值不做处理。可选
click         |          String         |          是否点击，只有一个有效值：click，其他值不做处理。可选

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('修改story的有用数或者无用数或者点击数', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mystory/story/storyIsUseFulOrClick.htm?websiteIdLastView=1&storyId=7885&click=click';
       tester.get(__path(__filename) + 'websiteIdLastView=1&storyId=7885&click=click')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});