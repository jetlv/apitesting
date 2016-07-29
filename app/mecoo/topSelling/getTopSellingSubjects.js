//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8420
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
curSubjectId         |          Integer         |          当前需要排除的套装ID
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1
subjectsNum         |          Integer         |          返回套装数量，为空默认为10

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('热销套装：除该套装外，目前平台一月内卖得最好的套装。首先按数量先后顺序展示，当数量一致时，按新建时间倒序展示；
 目前没有销量,暂时只按照套装新建时间排序', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/topSelling/getTopSellingSubjects.htm?subjectsNum=15&deviceType=1';
       tester.get(__path(__filename) + 'subjectsNum=15&deviceType=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});