//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=7833
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cartId         |          Integer         |          购物车ID，不能为空
memberId         |          Integer         |          会员ID，不能为空
languageCode         |          String         |          语言编码，不能为空
consigneeName         |          String         |          收件人姓名，不能为空
consigneeStateId         |          Integer         |          收件人国家ID，不能为空
consigneeAddr         |          String         |          收件人地址，不能为空
consigneePhone         |          String         |          收件人电话，不能为空
consigneeEmail         |          String         |          收件 人邮箱，不能为空
consigneeCity         |          String         |          收件人城市，不能为空
consigneeNameJa         |          String         |          收件人日本名字，为日语时不能为空
consigneePostalCode         |          String         |          
consigneeGender         |          Integer         |          
consigneeUrbanAreas         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('更新邮寄地址', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sns/product/updateBillingAddress.htm?cartId=9&memberId=2105474&languageCode=en-uk&consigneeName=milanoo&consigneeStateId=1
 			&consigneeAddr=testAddr&consigneePhone=12345678&consigneeEmail=test@milanoo.com&consigneeCity=chengdu&consigneePostalCode=614000&consigneeGender=1
 				&consigneeUrbanAreas=sichuang';
       tester.get(__path(__filename) + 'cartId=9&memberId=2105474&languageCode=en-uk&consigneeName=milanoo&consigneeStateId=1
 			&consigneeAddr=testAddr&consigneePhone=12345678&consigneeEmail=test@milanoo.com&consigneeCity=chengdu&consigneePostalCode=614000&consigneeGender=1
 				&consigneeUrbanAreas=sichuang')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});