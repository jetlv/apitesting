/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 */
function __path() {
    var sep = CONST['SEP_' + os.platform()];
    var fArray = __filename.split(sep);
    var path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    return path;
}

var tester = supertest.agent('http://app.milanoo.com');

describe('首页推荐', function () {
    it('基于用户推荐', function (done) {
        var expected = {
            "msg": "操作成功",
            "view_to_buy_num": 0,
            "code": "0",
            "top_selling_num": 20,
            "list": [{
                "promotionDiscount": 70,
                "firstPictureUrl": "2011/201105/20110511110349_2_9B9F.jpg",
                "websiteId": 1,
                "productCode": "14600071814",
                "productId": "71814",
                "promotionPrice": 0.5,
                "productName_en": "Beautiful PVC 1-Piece Nail Stickers",
                "source": "RT_TOP_SELLING",
                "libkey": "CLEAROUT",
                "productName": "Beautiful PVC 1-Piece Nail Stickers",
                "productPrice": 1.67,
                "fastDelivery": 0
            },
                {
                    "promotionDiscount": 62,
                    "firstPictureUrl": "tb2015/tb201507/tb20150722/5f3bd08e-4a3e-4414-9857-504d2ffb26ac.jpg",
                    "websiteId": 1,
                    "productCode": "06060531247",
                    "productId": "531247",
                    "promotionPrice": 3.47,
                    "productName_en": "2016 Hot Women's Bikini Swim Brief ",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "2016 Hot Women's Bikini Swim Brief ",
                    "productPrice": 9.14,
                    "fastDelivery": 1
                },
                {
                    "firstPictureUrl": "tb2016/tb201603/tb20160324/83aaeedc-b1cb-46e7-b996-35e71d6ac3cb.jpg",
                    "websiteId": 1,
                    "productCode": "06050580289",
                    "productId": "580289",
                    "productName_en": "Black Ruffles Off-The-Shoulder Lycra Spandex Swimsuit for Women",
                    "source": "RT_TOP_SELLING",
                    "productName": "Black Ruffles Off-The-Shoulder Lycra Spandex Swimsuit for Women",
                    "productPrice": 13.99,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 32,
                    "firstPictureUrl": "tb2016/tb201601/tb20160120/b04b3dca-18c2-4e0b-9767-a87cc1852f3d.jpg",
                    "websiteId": 1,
                    "productCode": "15640561449",
                    "productId": "561449",
                    "promotionPrice": 30.79,
                    "productName_en": "Rose Red Chiffon Belly Dance Costume for Women",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Rose Red Chiffon Belly Dance Costume for Women",
                    "productPrice": 45.28,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 90,
                    "firstPictureUrl": "201309/20130930/Unique-Fashion-White-One-Piece-Halter-Womens-Swimsuit-69471-5.jpg",
                    "websiteId": 1,
                    "productCode": "06030069471",
                    "productId": "69471",
                    "promotionPrice": 2,
                    "productName_en": "Unique Fashion White One-Piece Halter Womens Swimsuit",
                    "source": "RT_TOP_SELLING",
                    "libkey": "CLEAROUT",
                    "productName": "Unique Fashion White One-Piece Halter Womens Swimsuit",
                    "productPrice": 20,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 45,
                    "firstPictureUrl": "201109/20110927/Naruto-Uzumaki-Naruto-Cosplay-Costume-4289-0.jpg",
                    "websiteId": 1,
                    "productCode": "04880004289",
                    "productId": "4289",
                    "promotionPrice": 41.24,
                    "productName_en": "Naruto Uzumaki Naruto Genin Cosplay Costume",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Uzumaki Naruto Genin Cosplay Costume",
                    "productPrice": 74.99,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 50,
                    "firstPictureUrl": "tb2014/tb201404/tb20140410/fbb1a351-f813-4a56-b770-2c185220e480.jpg",
                    "websiteId": 1,
                    "productCode": "10630445803",
                    "productId": "445803",
                    "promotionPrice": 12.59,
                    "productName_en": "Yellow Fleece Flannel Pikachu Cosplay Costume",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Yellow Fleece Flannel Pikachu Cosplay Costume",
                    "productPrice": 25.18,
                    "fastDelivery": 1
                },
                {
                    "firstPictureUrl": "tb2015/tb201506/tb20150616/361de740-959b-416c-88db-c7e46cd43fcc.jpg",
                    "websiteId": 1,
                    "productCode": "08320526295",
                    "productId": "526295",
                    "productName_en": "Black Nylon Cut Out Semi-Sheer Hosiery ",
                    "source": "RT_TOP_SELLING",
                    "productName": "Black Nylon Cut Out Semi-Sheer Hosiery ",
                    "productPrice": 5.99,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 90,
                    "firstPictureUrl": "201103/White-Classic-Casual-Round-Neck-Womens-T-shirt-59717-1.jpg",
                    "websiteId": 1,
                    "productCode": "05430059717",
                    "productId": "59717",
                    "promotionPrice": 2,
                    "productName_en": "White Classic Casual Round Neck Womens T-shirt",
                    "source": "RT_TOP_SELLING",
                    "libkey": "CLEAROUT",
                    "productName": "White Classic Casual Round Neck Womens T-shirt",
                    "productPrice": 20,
                    "fastDelivery": 0
                },
                {
                    "firstPictureUrl": "201403/20140325/Lavender-A-line-Sequin-V-Neck-Sleeveless-Tulle-Pretty-Cocktail-Dress-367321-1749937.jpg",
                    "websiteId": 1,
                    "productCode": "05650367321",
                    "productId": "367321",
                    "productName_en": "Lavender A-line Sequin V-Neck Sleeveless Tulle Pretty Cocktail Dress ",
                    "source": "RT_TOP_SELLING",
                    "productName": "Lavender A-line Sequin V-Neck Sleeveless Tulle Pretty Cocktail Dress ",
                    "productPrice": 101.99,
                    "fastDelivery": 1
                },
                {
                    "firstPictureUrl": "tb2014/tb201401/tb20140103/32282c57-1e12-43e5-bf6d-48cf6134975c.JPG",
                    "websiteId": 1,
                    "productCode": "24640415447",
                    "productId": "415447",
                    "productName_en": "Royal Blue Cowhide Loafers Chic Men's Shoes",
                    "source": "RT_TOP_SELLING",
                    "productName": "Royal Blue Cowhide Loafers Chic Men's Shoes",
                    "productPrice": 39.99,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 30,
                    "firstPictureUrl": "201308/20130816/Naruto-Hidden-Leaf-Village-Of-Konoha-Jounins-Uniform-4273-1657388.jpg",
                    "websiteId": 1,
                    "productCode": "04880004273",
                    "productId": "4273",
                    "promotionPrice": 44.99,
                    "productName_en": "Naruto Hatake Kakashi Halloween Cosplay Costume  ",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Hatake Kakashi Halloween Cosplay Costume  ",
                    "productPrice": 64.28,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 40,
                    "firstPictureUrl": "201402/20140228/Naruto-Ninja-Leaf-Village-Gloves-4304-2093931.jpg",
                    "websiteId": 1,
                    "productCode": "04280004304",
                    "productId": "4304",
                    "promotionPrice": 4.79,
                    "productName_en": "Naruto Ninja Leaf Village Gloves",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Ninja Leaf Village Gloves",
                    "productPrice": 7.99,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 40,
                    "firstPictureUrl": "201404/20140417/Naruto-Kunai-Holster-Bag-4306-10.jpg",
                    "websiteId": 1,
                    "productCode": "04280004306",
                    "productId": "4306",
                    "promotionPrice": 7.99,
                    "productName_en": "Naruto Kunai Holster Bag",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Kunai Holster Bag",
                    "productPrice": 13.32,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 40,
                    "firstPictureUrl": "201407/20140707/Naruto-Kakashi-Veil-Cosplay-Accessory-4311-2.jpg",
                    "websiteId": 1,
                    "productCode": "04280004311",
                    "productId": "4311",
                    "promotionPrice": 3.99,
                    "productName_en": "Naruto Kakashi Veil Cosplay Accessory",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Kakashi Veil Cosplay Accessory",
                    "productPrice": 6.65,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 30,
                    "firstPictureUrl": "200812/Naruto-Ninja-Leaf-Village-HeadBand-Black-4321-1.jpg",
                    "websiteId": 1,
                    "productCode": "04280004321",
                    "productId": "4321",
                    "promotionPrice": 2.69,
                    "productName_en": "Naruto Ninja Leaf Village Headband Black Cosplay",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Ninja Leaf Village Headband Black Cosplay",
                    "productPrice": 3.85,
                    "fastDelivery": 0
                },
                {
                    "promotionDiscount": 40,
                    "firstPictureUrl": "200812/Naruto-Ninja-Shoes-4323-1.jpg",
                    "websiteId": 1,
                    "productCode": "06500004323",
                    "productId": "4323",
                    "promotionPrice": 13.59,
                    "productName_en": "Cool Naruto Ninja Cosplay Shoes",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Cool Naruto Ninja Cosplay Shoes",
                    "productPrice": 22.65,
                    "fastDelivery": 0
                },
                {
                    "promotionDiscount": 50,
                    "firstPictureUrl": "200910/White-And-Deep-Blue-School-Uniform-16782-1.jpg",
                    "websiteId": 1,
                    "productCode": "03330016782",
                    "productId": "16782",
                    "promotionPrice": 38.49,
                    "productName_en": "White And Deep Blue School Uniform",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "White And Deep Blue School Uniform",
                    "productPrice": 76.98,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 40,
                    "firstPictureUrl": "200912/Unicolor-Black-Unisex-Lace-Zentai-Suit-21669-1.jpg",
                    "websiteId": 1,
                    "productCode": "04090021669",
                    "productId": "21669",
                    "promotionPrice": 20.79,
                    "productName_en": "Halloween Lycra Spandex Catsuits With Detachable Hood",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Halloween Lycra Spandex Catsuits With Detachable Hood",
                    "productPrice": 34.65,
                    "fastDelivery": 1
                },
                {
                    "promotionDiscount": 40,
                    "firstPictureUrl": "20110622/Naruto-Cosplay-Shoes-23001-1.jpg",
                    "websiteId": 1,
                    "productCode": "04280023001",
                    "productId": "23001",
                    "promotionPrice": 7.99,
                    "productName_en": "Naruto Cosplay Shoes",
                    "source": "RT_TOP_SELLING",
                    "libkey": "8TH ANNIVERSARY SALE",
                    "productName": "Naruto Cosplay Shoes",
                    "productPrice": 13.32,
                    "fastDelivery": 1
                }]
        }
        tester.get(__path() + 'memberId=3654781&cookieId=d89494b768dff5a36d273d60d&returnNum=20')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                done();
            });
    });
});