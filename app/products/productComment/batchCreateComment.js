//http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8413
//AUTOMATICALLY GENERATED, NEED TO BE MODIFIED


/**
参数名称         |          参数类型         |          参数说明
json         |          String         |          <pre>
   [{
       "productScore":0, // 商品得分0、1、2、3、4、5
       "userIp":"", // 用户IP
       "memberEmail":"abc@mialnoo.com", // 用户邮箱，不能为空
       "commentPictureUrlArr":"['url1|||pictureName|||pictureComment','url2|||pictureName|||pictureComment']", // 评论图片评论及URL
       "commentTitle":"", // 评论标题
       "userCountry":"", //用户国家代码
       "commentContent":"this is ok", // 评论内容，不为能空
       "memberName":"", // 用户名称
       "videoPicture":"", // 视频图片
       "videoUrl":"", // 视频URL
       "videoComment":"", // 视频评论
       "productId":1, // 商品ID，不能为空
       "languageCode":"cn-cn", // 语言编码，不能为空
       "websiteId":9, // 站点ID，不能为空
       "memberId":0, // 用户ID
       "type":0 //comment类型，具体关联milanoo_product_comment_type
   }]
 </pre>

 **/


/// <reference path="../../../include.d.ts" />

var R = require('../../../req.js');

var expect = R.expect;

var __path = R.__path;

var tester = R.supertest.agent(R.CONST.APP_ADDRESS_TESTENV);



describe('批量提交商品评论', function () {

   it('基本验证', function (done) {

       var fullPath = 'http://192.168.11.16:8080/products/productComment/batchCreateComment.htm?json=[{"productScore":5,"userIp":"172.0.0.1","memberEmail":"abc@mialnoo.com",
 "commentPictureUrlArr":"['2015/201503/20150320/352A7C987F0000014CF15AA5CFDCC98E.jpg|||test|||this%20is%20a%20pic%20content',
 '2015/201503/20150320/352A7C5C7F0000011CEF252AB259D7BA.jpg']",
 "commentTitle":"this%20is%20a%20title","userCountry":"CN","commentContent":"this%20is%20a%20test%20for%20content",
 "memberName":"CB","productId":2917,"languageCode":"cn-cn",%20"websiteId":9,"memberId":0}]';
       tester.get(__path(__filename) + 'json=[{"productScore":5,"userIp":"172.0.0.1","memberEmail":"abc@mialnoo.com",
 "commentPictureUrlArr":"['2015/201503/20150320/352A7C987F0000014CF15AA5CFDCC98E.jpg|||test|||this%20is%20a%20pic%20content',
 '2015/201503/20150320/352A7C5C7F0000011CEF252AB259D7BA.jpg']",
 "commentTitle":"this%20is%20a%20title","userCountry":"CN","commentContent":"this%20is%20a%20test%20for%20content",
 "memberName":"CB","productId":2917,"languageCode":"cn-cn",%20"websiteId":9,"memberId":0}]')

               .end(function (err, res) {

                   expect(res.status).eql(200);

                   done();

});
});
});