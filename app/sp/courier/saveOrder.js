//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8138
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 下单接口**/


/**
参数名称         |          参数类型         |          参数说明
p         |          OrderParams         |          下单参数
 <pre>
  p.memberId 会员Id，必传
  p.languageCode 语言编码，必传
  p.websiteId 站点Id，默认为主站
  p.websiteIdLastView 最后访问站点
  p.deviceType 设置类型，默认为1
  p.ip 用户下单IP
  p.expressType 用户选择的快递方式，SuperSaver、Standard、Expedited等等，必传
  p.addressId 用户选择的送货地址Id，必传
  p.countryId 用户选择的送货地址中的国家Id
  p.isIncurance 是否选择了快递保险：1已选择、0：未选择，必传
  p.promotion 促销信息，如：o2o、EDM_FR_20140815、fb_en_493_2924077等
  p.promotionURL
  p.refererUrl
  p.publisherId
  p.linkId
  p.websiteURL
  p.couponPromotionType 折扣券、礼券针对客户群(标识折扣面向的客户群:o2o)
  p.gclid Google外链时的GCLID
  p.channelPath 用户渠道路径，多个用|分隔
  p.remarks 会员备注
  p.cartIds 指定购物车Id，多个以,分隔，用于购物车选择下单
  p.payClass 预选的支付方式
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('saveOrder', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/saveOrder.htm?p.memberId=2924066&p.languageCode=en-uk&p.expressType=SuperSaver&p.addressId=2105215&p.isIncurance=1';
       tester.get(__path(__filename) + 'p.memberId=2924066&p.languageCode=en-uk&p.expressType=SuperSaver&p.addressId=2105215&p.isIncurance=1')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});