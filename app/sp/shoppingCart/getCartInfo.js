/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var deep = require('deep-diff')
var observableDiff = require('deep-diff').observableDiff;
var applyChange = require('deep-diff').applyChange;
var chai = require('chai');
var chaiSubset = require('chai-subset');
chai.use(chaiSubset);
var expect = chai.expect;


var tester = supertest.agent('http://app.milanoo.com');

describe('购物车信息 - ' + __path(__filename), function () {
    it('获取购物车信息 - http://app.milanoo.com' + __path(__filename) + 'websiteIdLastView=1&countryId=&cookieId=nocookie&promotionKey=SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104&memberId=3666009&countryCode=US&expressType=&priceUnit=USD&languageCode=en-uk&websiteId=1&autoAddGiftFlag=1&deviceType=5' , function (done) {
        var expected = {
            "msg": "操作成功",
            "code": "0",
            "giftInfo": {
                "giftList": [{
                    "haveCategoryProducts": true,
                    "rangeLumpSum": 0,
                    "isView": 0,
                    "giftName": "Gift",
                    "giftProductList": [{
                        "giftCheckedSign": false,
                        "limitNum": 1,
                        "buyNum": 0,
                        "productId": 157678,
                        "isInCart": 0,
                        "giftPriceRate": 1,
                        "productName": "Multi-Color Printed Nylon Womens Leggings",
                        "superpositionNum": 0,
                        "firstPictureUrl": "tb2012/tb201204/tb20120426/BATCHXLS_c5d082b3-4179-4369-ab5e-1ff5862c000f_003.jpg",
                        "giftPrice": 1,
                        "oldlimitNum": 1,
                        "productPrice": 1.9,
                        "status": 1
                    },
                        {
                            "giftCheckedSign": false,
                            "limitNum": 1,
                            "buyNum": 0,
                            "productId": 81633,
                            "isInCart": 0,
                            "giftPriceRate": 1,
                            "productName": "Handsome Blue 98% Bamboo Cotton 2% Bamboo Fiber Denim Mens Short Jeans",
                            "superpositionNum": 0,
                            "firstPictureUrl": "20110617/Handsome-Blue-Bamboo-Cotton-Bamboo-Fiber-Denim-Mens-Short-Jeans-81633-1.jpg",
                            "giftPrice": 1,
                            "oldlimitNum": 1,
                            "productPrice": 20.99,
                            "status": 1
                        },
                        {
                            "giftCheckedSign": false,
                            "limitNum": 1,
                            "buyNum": 0,
                            "productId": 78538,
                            "isInCart": 0,
                            "giftPriceRate": 1,
                            "productName": "Comfortable White Printing Round Neck Short Sleeves 100% Cotton Mens T-Shirt",
                            "superpositionNum": 0,
                            "firstPictureUrl": "201206/20120620/Comfortable-White-Printing-Round-Neck-Short-Sleeves-100-Cotton-Mens-T-Shirt-78538-5.jpg",
                            "giftPrice": 1,
                            "oldlimitNum": 1,
                            "productPrice": 7.99,
                            "status": 1
                        },
                        {
                            "giftCheckedSign": false,
                            "limitNum": 1,
                            "buyNum": 0,
                            "productId": 73491,
                            "isInCart": 0,
                            "giftPriceRate": 1,
                            "productName": "Casual Blue And Red 100% Cotton Mens Long Sleeves Shirt",
                            "superpositionNum": 0,
                            "firstPictureUrl": "201310/20131011/Casual-Blue-And-Red-100-Cotton-Mens-Long-Sleeves-Shirt-73491-682182.jpg",
                            "giftPrice": 1,
                            "oldlimitNum": 1,
                            "productPrice": 6,
                            "status": 1
                        }],
                    "isOverlie": 0,
                    "radio": 1,
                    "giftId": 1539,
                    "superpositionNumTotal": 0,
                    "condition": 1,
                    "websiteId": 1,
                    "promontionType": 2,
                    "logisticsFree": 1,
                    "rate": 6.5761,
                    "endTime": 1470988800,
                    "categoryIdList": [1333,
                        1161,
                        1324,
                        1163,
                        538],
                    "lowestNum": 1
                },
                    {
                        "haveCategoryProducts": true,
                        "rangeLumpSum": 60,
                        "isView": 0,
                        "giftName": "Fashion Week Gift",
                        "giftProductList": [{
                            "giftCheckedSign": false,
                            "limitNum": 1,
                            "buyNum": 0,
                            "productId": 69471,
                            "isInCart": 0,
                            "giftPriceRate": 0,
                            "productName": "Unique Fashion White One-Piece Halter Womens Swimsuit",
                            "superpositionNum": 0,
                            "firstPictureUrl": "201309/20130930/Unique-Fashion-White-One-Piece-Halter-Womens-Swimsuit-69471-5.jpg",
                            "giftPrice": 0,
                            "oldlimitNum": 1,
                            "productPrice": 2,
                            "status": 1
                        },
                            {
                                "giftCheckedSign": false,
                                "limitNum": 1,
                                "buyNum": 0,
                                "productId": 59717,
                                "isInCart": 0,
                                "giftPriceRate": 0,
                                "productName": "White Classic Casual Round Neck Womens T-shirt",
                                "superpositionNum": 0,
                                "firstPictureUrl": "201103/White-Classic-Casual-Round-Neck-Womens-T-shirt-59717-1.jpg",
                                "giftPrice": 0,
                                "oldlimitNum": 1,
                                "productPrice": 2,
                                "status": 1
                            },
                            {
                                "giftCheckedSign": false,
                                "limitNum": 1,
                                "buyNum": 0,
                                "productId": 75939,
                                "isInCart": 0,
                                "giftPriceRate": 0,
                                "productName": "Cute Pink White Nylon Womens Bikini Swimsuit",
                                "superpositionNum": 0,
                                "firstPictureUrl": "2011/201107/2011-07-11-15_21_52_221_577.jpg",
                                "giftPrice": 0,
                                "oldlimitNum": 1,
                                "productPrice": 2,
                                "status": 1
                            },
                            {
                                "giftCheckedSign": false,
                                "limitNum": 1,
                                "buyNum": 0,
                                "productId": 85794,
                                "isInCart": 0,
                                "giftPriceRate": 0,
                                "productName": "Green 60% Cotton 40% Terylene Short Sleeves Mens Polo Shirt ",
                                "superpositionNum": 0,
                                "firstPictureUrl": "2011/201107/2011-07-06-17_00_35_793_586.JPG",
                                "giftPrice": 0,
                                "oldlimitNum": 1,
                                "productPrice": 4,
                                "status": 1
                            },
                            {
                                "giftCheckedSign": false,
                                "limitNum": 1,
                                "buyNum": 0,
                                "productId": 85962,
                                "isInCart": 0,
                                "giftPriceRate": 0,
                                "productName": "Short Sleeves Mens Polo Shirt ",
                                "superpositionNum": 0,
                                "firstPictureUrl": "2011/201107/2011-07-07-09_22_23_674_442.jpg",
                                "giftPrice": 0,
                                "oldlimitNum": 1,
                                "productPrice": 4,
                                "status": 1
                            }],
                        "isOverlie": 0,
                        "radio": 0,
                        "giftId": 1523,
                        "superpositionNumTotal": 0,
                        "condition": 0,
                        "websiteId": 1,
                        "promontionType": 2,
                        "logisticsFree": 1,
                        "rate": 6.5761,
                        "endTime": 1469088000,
                        "categoryIdList": [1100,
                            1399,
                            535,
                            1155,
                            1281],
                        "lowestNum": 0
                    }],
                "cartTotalPrice": 149.95
            },
            "shoppingCart": {
                "maxStockingTime": 11,
                "promotionKey": "SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104",
                "cartPricePromotionTotal": 0,
                "cartPriceCouponTotal": 0,
                "langCode": "en-uk",
                "countryId": 1,
                "freightFreePromotion": 0,
                "cartStockDay": 10,
                "websiteId": 1,
                "rate": 6.5761,
                "member": {
                    "deviceType": 1,
                    "emailsDy": 0,
                    "websiteId": 1,
                    "userTime": 1460341223,
                    "gradeOid": 0,
                    "snsMembersoftDeletes": 1,
                    "changeType": 0,
                    "userPass": "78f010002c77054bfb6dd20ad8a04341",
                    "id": 3666009,
                    "type": "Personal"
                },
                "cartGiftPriceTotal": 0,
                "cartPricePay": 154.94,
                "cartPriceTotal": 149.95,
                "noCouponFreightFree": {
                    "priceMin": 109,
                    "amountToUse": 0,
                    "categoryIds": [],
                    "cartIds": [51151235],
                    "superposition": 1,
                    "rate": 6.5761,
                    "discount": 0,
                    "id": 3221,
                    "type": 0,
                    "ifUse": true,
                    "ignoreCategory": 0
                },
                "deviceType": 5,
                "priceUnit": "USD",
                "cartPriceMemberTotal": 0,
                "minStockingTime": 0,
                "minCartStockDay": 0,
                "weight": 2.55,
                "productNum": 5,
                "rateTo": 6.5761,
                "fastDelivery": 1,
                "freightCountList": [{
                    "expressRule": "Expedited|0.5:108.35:0.5:42.44:3-5",
                    "priceAll": 48.74,
                    "weightFirst": 0.5,
                    "priceFirst": 108.35,
                    "priceSecond": 42.44,
                    "expressType": "Expedited",
                    "discount": 0,
                    "weightSecond": 0.5,
                    "priceTotal2": 48.74,
                    "postTime": "3-5",
                    "maxWeightFree": 1.8,
                    "max_postTime": 5,
                    "priceRegister": 0,
                    "freightOtherSub": 0,
                    "maxWeightNotFree": 1.6,
                    "priceTotal": 48.74,
                    "name": "Expedited",
                    "freightCouponSub": 0,
                    "min_postTime": 3,
                    "priceBase": 0,
                    "state": 0,
                    "maxOrderPrice": -1,
                    "order": "10"
                },
                    {
                        "expressRule": "Standard|0.5:96.18:0.5:32.56:6-7",
                        "priceAll": 39.38,
                        "weightFirst": 0.5,
                        "priceFirst": 96.18,
                        "priceSecond": 32.56,
                        "expressType": "Standard",
                        "discount": 0,
                        "weightSecond": 0.5,
                        "priceTotal2": 0,
                        "postTime": "6-7",
                        "maxWeightFree": 1.8,
                        "max_postTime": 7,
                        "priceRegister": 0,
                        "freightOtherSub": 39.38,
                        "maxWeightNotFree": 1.6,
                        "priceTotal": 0,
                        "name": "Standard",
                        "freightCouponSub": 0,
                        "min_postTime": 6,
                        "priceBase": 0,
                        "state": 0,
                        "introduction": "Generally use EMS or other courier sent, Mascot Costumes can only choose standard mode of transport.",
                        "maxOrderPrice": -1,
                        "order": "11"
                    }],
                "pricePoint": 2,
                "websiteIdLastView": 1,
                "couponMember": [{
                    "promotionKey": "",
                    "shopSum": 1,
                    "superposition": 0,
                    "against": "Orders",
                    "num": 1,
                    "discountDesc": "1.Both you and your invited friend could get a voucher of $15, available for any items.\r\n2.The voucher is available once your friend have their account registered.\r\n3.It’s up to you who could be invited   \r\n4.One order accepts single voucher only.",
                    "autoUsed": 1,
                    "effective": 0,
                    "rangeStartTime": -1,
                    "websiteId": 1,
                    "rate": 6.5761,
                    "couponType": 2,
                    "countryIds": "",
                    "rangeTime": -1,
                    "id": 1198677,
                    "priceDis": 0,
                    "firstPay": 0,
                    "price2use": 0,
                    "rangeLumpSum": "59|-1",
                    "rangeType": 1,
                    "outOfDate": false,
                    "disDate2use": 15,
                    "discountWay": "1",
                    "ceremonyId": 12939,
                    "discountData": "15",
                    "discountLang": "en-uk",
                    "cartIds": [51151235],
                    "num2use": 0,
                    "disWay2use": 1,
                    "name": "REFERFRIENDS",
                    "libkey": "1643A8F6FF1B6F26",
                    "currencyCode": "USD",
                    "status": 0
                }],
                "insurancePrice": 4.99,
                "websiteCarts": [{
                    "websiteName": "Milanoo",
                    "websiteId": 1,
                    "domainName": "www.milanoo.com",
                    "savedProducts": [],
                    "empty": false,
                    "products": [{
                        "maxStockingTime": 11,
                        "productPriceTotalRate": 149.95,
                        "freightFree": 0,
                        "allPropertyPriceRate": 0,
                        "referType": "",
                        "productPriceTotal": 149.95,
                        "productsWeight": 0.51,
                        "productName": "loral Print Maxi Dress ",
                        "sourcePriceRate": 29.99,
                        "websiteId": 1,
                        "argsPriceRate": 0,
                        "productsPrice": 29.99,
                        "productStockTime": 10,
                        "sku": {
                            "occupyStockQuantity": 0,
                            "productId": 179968,
                            "skuPropertyArr": [{
                                "propertyName": "Size",
                                "price": 0,
                                "configurationName": "S ",
                                "configurationId": 985,
                                "configurationValue": "size01",
                                "propertyId": 360,
                                "colorProperty": 2
                            },
                                {
                                    "propertyName": "Color",
                                    "price": 0,
                                    "configurationName": "Purple ",
                                    "configurationId": 4695,
                                    "configurationValue": "Purple",
                                    "propertyId": 769,
                                    "colorProperty": 1
                                }],
                            "sellQuantity": 0,
                            "stockQuantity": 0,
                            "skuType": 1,
                            "isActivate": 1,
                            "skuCode": "S00000179968000003",
                            "skuId": 10070550,
                            "fastDelivery": 1
                        },
                        "skuId": 10070550,
                        "productId": 179968,
                        "minStockingTime": 0,
                        "cartId": 51151235,
                        "minCartStockDay": 0,
                        "dataStatus": 0,
                        "propertyVos": [{
                            "propertyValue": "size01",
                            "propertyId": 360
                        },
                            {
                                "propertyValue": "Purple",
                                "propertyId": 769
                            }],
                        "fastDelivery": 1,
                        "promotionProductSingle": 1,
                        "virtualWeight": 0.51,
                        "productsPriceRate": 29.99,
                        "allPropertyPrice": 0,
                        "parcels": "0",
                        "salePropertyPrice": 0,
                        "additionalPrice": 28.49,
                        "argsPrice": 0,
                        "buyNum": 5,
                        "freightFreeCoupon": 1,
                        "gmtModify": "2016-04-11",
                        "additional": "522507",
                        "categoryName": "Maxi Dresses",
                        "giftPriceRate": 0,
                        "sourcePrice": 29.99,
                        "firstPictureUrl": "201407/20140711/Colorful-Floral-Printed-Halter-Jersey-Maxi-Dress-179968-2324639.jpg",
                        "payPriceRate": 29.99,
                        "giftFreightFree": 0,
                        "payPrice": 29.99,
                        "giftPrice": 0,
                        "freightFreeNoCoupon": 0,
                        "isGift": 0,
                        "propertiesOfDB": "360|size01,769|Purple",
                        "unitPriceOfDB": 29.99,
                        "productType": 0,
                        "customPrice": 0,
                        "tied": 1,
                        "salePropertyPriceRate": 0,
                        "customPriceRate": 0,
                        "isAdditionalProduct": 0,
                        "categoryCode": "000000132401029",
                        "gmtCreate": "2016-04-11",
                        "freightFreeSingle": 1,
                        "productCode": "#10290179968",
                        "categoryId": 1029
                    }]
                }],
                "cartPriceDropshipTotal": 0,
                "shoppingCartSorts": [{
                    "orderSort": {
                        "cartIds": [51151235],
                        "subjects": [{
                            "price2use": 0,
                            "against": "Orders",
                            "num2use": 0,
                            "name": "",
                            "discount": 0,
                            "id": 3221,
                            "type": 3,
                            "ifUse": true,
                            "way": 2,
                            "desc": ""
                        }]
                    },
                    "warehouse": 1
                }],
                "langId": 2,
                "orderCouponSingle": 1,
                "couponInvalid": []
            },
            "autoAddGiftFlag": 1
        };
        // console.log('http://app.milanoo.com' + __path(__filename) + 'websiteIdLastView=1&countryId=&cookieId=nocookie&promotionKey=SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104&memberId=3666009&countryCode=US&expressType=&priceUnit=USD&languageCode=en-uk&websiteId=1&autoAddGiftFlag=1&deviceType=5');
        tester.get(__path(__filename) + 'websiteIdLastView=1&countryId=&cookieId=nocookie&promotionKey=SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104&memberId=3666009&countryCode=US&expressType=&priceUnit=USD&languageCode=en-uk&websiteId=1&autoAddGiftFlag=1&deviceType=5')
            .expect(200)
            .end(function (err, res) {
                expect(res.status).equal(200);
                expect(res.body.msg).to.eql("操作成功");
                expect(res.body.code).to.eql("0");
                var member = {
                    deviceType: 1,
                    emailsDy: 0,
                    websiteId: 1,
                    userTime: 1460341223,
                    gradeOid: 0,
                    snsMembersoftDeletes: 1,
                    changeType: 0,
                    userPass: "78f010002c77054bfb6dd20ad8a04341",
                    id: 3666009,
                    type: "Personal"
                };
                observableDiff(member, res.body.shoppingCart.member, function(d) {
                    expect(d, JSON.stringify(d).replace(/"/g,'\'')).to.be.empty;
                });
                done();
            });
    });
});