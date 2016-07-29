//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8323
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cookieId         |          String         |          cookieId，不能为空
memberId         |          String         |          会员ID，登录后来不能为空
promotionKey         |          String         |          外链Key，可以为空
deviceType         |          Integer         |          设备类型，1PC 2wap 3iosApp 4androidApp 5ipad,为空时默认为1
coupon         |          String         |          当前应用的折扣券，可以为空
couponHasUsed         |          String         |          当前已使用的折扣券，可以为空
countryId         |          Integer         |          国家ID，和countryCode不能同时为空
countryCode         |          String         |          国家代码，和countryId不能同时为空
expressType         |          String         |          快递方式, Standard：普通；Expedited：加急；SuperSaver：小包，可以为空
priceUnit         |          String         |          货币单位，不能为空
languageCode         |          String         |          语言编码，不能为空
websiteId         |          Integer         |          站点ID，默认为1
websiteIdLastView         |          Integer         |          最后访问的站点ID，可以为空
groupPid         |          Integer         |          分组父ID，不能为空
buyNum         |          Integer         |          修改的数量，> 0

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('通过分组ID更新购物车商品数量', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/shoppingCart/updateBuyNum.htm?cookieId=test&memberId=3214999&groupPid=1443080167&buyNum=3&priceUnit=USD&websiteId=9&languageCode=cn-cn&countryId=1';
       tester.get(__path(__filename) + 'cookieId=test&memberId=3214999&groupPid=1443080167&buyNum=3&priceUnit=USD&websiteId=9&languageCode=cn-cn&countryId=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});