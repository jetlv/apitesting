//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=6029
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
cr         |          Courier         |          <pre>
  cr.countryId:国家ID，不能为空
  cr.stateName:州名称，可以为空
  cr.searchString:州名称或者城市名称搜索的字符串
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('国家id获取州/省 和 国家id及州/省获取城市', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/sp/courier/getStateById.htm?cr.countryId=10';
       tester.get(__path(__filename) + 'cr.countryId=10')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});