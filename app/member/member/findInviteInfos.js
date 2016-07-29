//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8471
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
memberId         |          Integer         |          会员ID，不能为空
pageNo         |          Integer         |          当前页码，默认为1
pageSize         |          Integer         |          每页条数，默认为24
websiteId         |          Integer         |          站点ID，默认为1
languageCode         |          String         |          语言编码，默认为en-uk

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('查询会员邀请列表 [需求 #36178]', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/member/member/findInviteInfos.htm?memberId=123&pageNo=1&pageSize=20&websiteId=1&languageCode=en-uk';
       tester.get(__path(__filename) + 'memberId=123&pageNo=1&pageSize=20&websiteId=1&languageCode=en-uk')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});nction (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});