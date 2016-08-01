//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8520
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 修改品类和材质[需求 #37016]**/


/**
参数名称         |          参数类型         |          参数说明
id         |          Integer         |          数据库ID，不能为空
categoryType         |          Integer         |          品类类型：1婚纱、2礼服，不能为空
stilType         |          Integer         |          款式类型：1A型、2鱼尾、3修身、4蓬蓬裙款式，不能为空
stoffType         |          Integer         |          材质类型：1绸缎、2蕾丝 、3欧根纱、4雪纺，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('wishList', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/app/o2o/wishList/modifyProductAppoint.htm?categoryType=1&stilType=2&stoffType=3';
       tester.get(__path(__filename) + 'categoryType=1&stilType=2&stoffType=3')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});