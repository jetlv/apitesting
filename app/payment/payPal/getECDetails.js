//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7651
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** PayPal支付流程第二步：获取支付信息。（用于Milanoo内部订单支付）**/


/**
参数名称         |          参数类型         |          参数说明
params         |          PayPalGetECParams         |          参数说明：<br>
  params.token 支付流程中用到的令牌;<br>
  params.memberId 当前已登录用户Id;<br>
  // 当前没有登录时需要以下参数：<br>
  params.cookieId;<br>
  params.languageCode;<br>
  params.websiteId;<br>
  params.websiteIdLastView，最后访问站点Id，默认为主站1;<br>
  params.deviceType 设备类型：1、主站 2、wap站 3、苹果app 4、安卓app 5、苹果cosplay app 6、安卓cosplay shpw app;<br>
  params.ip;<br>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('getECDetails', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/payment/payPal/getECDetails.htm?params.token=&params.memberId=';
       tester.get(__path(__filename) + 'params.token=&params.memberId=')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});