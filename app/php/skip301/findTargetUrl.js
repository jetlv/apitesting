//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5974
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
languageCode         |          String         |          语言编码，如en-uk,不能为空
sourceUrl         |          String         |          请求资源URL，不能为空

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询Skip301 跳转URL信息', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/php/skip301/findTargetUrl.htm?websiteIdLastView=1&languageCode=en-uk&sourceUrl=http://www.milanoo.com/Sheath-Silver-Satin-Applique-Short-Fashion-Cocktail-Dress-p243180.html';
       tester.get(__path(__filename) + 'websiteIdLastView=1&languageCode=en-uk&sourceUrl=http://www.milanoo.com/Sheath-Silver-Satin-Applique-Short-Fashion-Cocktail-Dress-p243180.html')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});