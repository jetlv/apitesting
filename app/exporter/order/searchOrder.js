//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=5941
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          String         |          会员ID，不能为空。
pass         |          String         |          密码，不能为空。
pageNo         |          String         |          第几页，如果空默认为1
pageSize         |          String         |          每页大小，如果空默认为50
langCode         |          String         |          语言代码，可选
OrdersCids         |          String         |          订单编号集合，可选 ,如 “1，2，3，4”
sellerOrdersCids         |          String         |          供应商订单编号集合，可选 第三方订单号集合， 如 “1，2，3，4”
timeType         |          String         |          时间查询类型，必填。 如：timeType=Shipments 表示发货时间；timeType=Add 表示下单时间
start         |          String         |          开始时间戳，可选，以秒为单位
end         |          String         |          结束时间戳，可选，以秒为单位
special         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询订单', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/exporter/order/searchOrder.htm?memberId=2105243&pass=11111&pageNo=1&pageSize=24&langCode=en-uk&timeType=Add';
       tester.get(__path(__filename) + 'memberId=2105243&pass=11111&pageNo=1&pageSize=24&langCode=en-uk&timeType=Add')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});