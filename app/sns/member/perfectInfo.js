//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7756
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空
contact         |          String         |          姓名，不能与contactJa同时为空
contactJa         |          String         |          日文姓名，不能与contact同时为空
sex         |          String         |          性别，不能为空
age         |          String         |          年龄，不能为空
interests         |          String         |          个人风格，不能为空
blogAddress         |          String         |          博客地址，不能为空
bwhName         |          String         |          三围名称
bust         |          String         |          胸围
hips         |          String         |          臀围
waist         |          String         |          腰围
height         |          String         |          身高
sfHeight         |          String         |          肩到脚跟的高度
skHeight         |          String         |          肩到膝盖的高度
unit         |          String         |          单位

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sns 完善用户信息，会自动加积分', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/member/perfectInfo.htm?contact=米|兰&contactJa=&sex=Men&age=15-20&interests=1,2&blogAddress=test';
       tester.get(__path(__filename) + 'contact=米|兰&contactJa=&sex=Men&age=15-20&interests=1,2&blogAddress=test')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});