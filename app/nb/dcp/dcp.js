//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8133
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
websiteId         |          String         |          站点，不能为空，数字
languageCode         |          String         |          语言代码，不能为空
deviceType         |          String         |          
currency         |          String         |          货币代码，不能为空
categoryId         |          String         |          分类id，数字，不能为空
dcpUrl         |          String         |          
pageNo         |          String         |          
pageSize         |          String         |          

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询DCP信息
     价格按照指定货币进行换算了', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/nb/dcp/dcp.htm?websiteId=1&languageCode=en-uk&deviceType=1&currency=USD&categoryId=502&pageNo=1&pageSize=36';
       tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&deviceType=1&currency=USD&categoryId=502&pageNo=1&pageSize=36')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});