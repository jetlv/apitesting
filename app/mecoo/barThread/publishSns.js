//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8364
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED
/** 发布分享圈数据**/


/**
参数名称         |          参数类型         |          参数说明
userid         |          Integer         |          当前登录会员ID,不可为空
publishData         |          String         |          发布分享的json数据
 格式如下：
 {
  “pics”:[
             {
             pic: "/sns/2014/12/29/14265500000070685.jpg",
             paster_id:1,
             "tags":[
                      {
                          "tagname":"吊丝帽子",
                          "point_x":"56.41",
                          "point_y":"324.22",
                          "direction":"2"
                      }
                    ]
             }
         ],
 "title":"小三说我这身穿着帅呆了，我一高兴就给了她200万,于是我没钱了",
 "client_platform":"1",
 "client_system":"1"
 }

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('publishSns', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/mecoo/barThread/publishSns.htm?userid=3&publishData={"pics":[{"pic": "/sns/2014/12/29/14265500000070685.jpg","paster_id":1,"tags":[{"tagname":"吊丝帽子","point_x":"56.41","point_y":"324.22","direction":"2"}]}],"title":"小三说我这身穿着帅呆了，我一高兴就给了她200万,于是我没钱了","client_platform":"1","client_system":"1"}';
       tester.get(__path(__filename) + 'userid=3&publishData={"pics":[{"pic": "/sns/2014/12/29/14265500000070685.jpg","paster_id":1,"tags":[{"tagname":"吊丝帽子","point_x":"56.41","point_y":"324.22","direction":"2"}]}],"title":"小三说我这身穿着帅呆了，我一高兴就给了她200万,于是我没钱了","client_platform":"1","client_system":"1"}')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});