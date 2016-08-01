//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8430
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 你可能感兴趣的套装：三层逻辑，一是最近查看过的套装，二是用户最近搜索，三是用户关注的角色，此三种数据随机推荐；
 如果前三种都没数据，或者是数据不够，则在相应的数据后面展示除本套装外最近添加的。注意不要在一页展示2个一样的套装。
 
 目前最近查看的,陈波处未记录,暂时未做**/


/**
参数名称         |          参数类型         |          参数说明
curSubjectId         |          String         |          当前需要排除的套装ID,多个用逗号分开,形如 1,2,3,4
memberId         |          Integer         |          用户ID
cookieId         |          String         |          cookie id,不可为空
deviceType         |          Integer         |          设备类型：1PC、2wap、3iosApp、4androidApp、5ipad，默认为1
subjectsNum         |          Integer         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getRecommendedSubjects', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/recommend/getRecommendedSubjects.htm?memberId=3443529&searchContent=秦&productsNum=10&cookieId=1';
       tester.get(__path(__filename) + 'memberId=3443529&searchContent=秦&productsNum=10&cookieId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});