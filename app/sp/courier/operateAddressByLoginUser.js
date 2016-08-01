//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6027
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 根据传入的参数保存或者更新地址**/


/**
参数名称         |          参数类型         |          参数说明
mc         |          MemberConsignee         |          参数说明
 <pre> 
  mc.memberId 会员ID，不能为空
  mc.id 地址薄ID，为空时为新增、不为空时为修改
  mc.consigneeStateId: 国家id，不能为空
  mc.consigneeName: 姓名，不能为空，格式：姓|名
  mc.consigneePostalcode: 邮编，不能为空
  mc.consigneeAddr: 地址，不能为空，格式：街道1|街道2
  mc.consigneePhone: 电话，不能为空
  mc.consigneeEmail: email地址，可以为空
  mc.consigneeCounty: 区县，可以为空
  mc.consigneeCity: 城市，不能为空
  mc.memberUrbanAreas: 州、省，不能为空
  mc.consigneeGender: 性别 1:男 2:女
  mc.defaultAddress: 是否是默认地址，此参数修改时有效：2是、0不是
  mc.addressSource: 会员地址来源；0：milanoo；1：paypal；2：facebook
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('operateAddressByLoginUser', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/operateAddressByLoginUser.htm?mc.memberId=3214999&mc.consigneeStateId=12&mc.consigneeName=chen|bo&mc.consigneePostalcode=610041&mc.consigneeAddr=test&mc.consigneePhone=13812345678&mc.consigneeCity=cd&mc.memberUrbanAreas=sc&mc.consigneeGender=2&mc.addressSource=0';
       tester.get(__path(__filename) + 'mc.memberId=3214999&mc.consigneeStateId=12&mc.consigneeName=chen|bo&mc.consigneePostalcode=610041&mc.consigneeAddr=test&mc.consigneePhone=13812345678&mc.consigneeCity=cd&mc.memberUrbanAreas=sc&mc.consigneeGender=2&mc.addressSource=0')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});