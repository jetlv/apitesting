//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7690
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点ID，不能为空
languageCode         |          String         |          语言编码，不能为空
productIds         |          String         |          商品ID，多个以“,”分开，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('sns 后台添加商品时验证商品是否激活
     注意：在语言ID2到10之间只要有一个上架就算是激活的
           0：不激活；1：激活', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/htProductIsActiver.htm?websiteId=1&languageCode=en-uk&productIds=6546, 346';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&productIds=6546, 346')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});