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

describe('迷你购物车', function () {
    it('普通用户获取迷你购物车信息', function (done) {
        var expected = {
            msg: "操作成功",
            code: "0",
            shoppingCart: {
                maxStockingTime: 10,
                promotionKey: "SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104",
                cartPricePromotionTotal: 20.99,
                cartPriceCouponTotal: 0,
                langCode: "en-uk",
                countryId: 1,
                freightFreePromotion: 1,
                cartStockDay: 9,
                websiteId: 1,
                rate: 6.5761,
                member: {
                    deviceType: 1,
                    emailsDy: 0,
                    websiteId: 1,
                    userTime: 1459995496,
                    gradeOid: 0,
                    snsMembersoftDeletes: 1,
                    changeType: 0,
                    userPass: "78f010002c77054bfb6dd20ad8a04341",
                    id: 3661645,
                    type: "Personal"
                },
                cartGiftPriceTotal: 0,
                cartPricePay: 22.98,
                cartPriceTotal: 20.99,
                noCouponFreightFree: {
                    priceMin: 109,
                    amountToUse: 88.01,
                    categoryIds: [],
                    cartIds: [
                        52238009
                    ],
                    superposition: 1,
                    rate: 6.5761,
                    discount: 0,
                    id: 3221,
                    type: 0,
                    ifUse: false,
                    ignoreCategory: 0
                },
                deviceType: 5,
                priceUnit: "USD",
                cartPriceMemberTotal: 0,
                minStockingTime: 0,
                minCartStockDay: 0,
                weight: 0.2,
                productNum: 0,
                rateTo: 6.5761,
                fastDelivery: 1,
                freightCountList: [
                    {
                        expressRule: "Expedited|0.5:108.35:0.5:42.44:3-5",
                        priceAll: 16.48,
                        weightFirst: 0.5,
                        priceFirst: 108.35,
                        priceSecond: 42.44,
                        expressType: "Expedited",
                        discount: 0,
                        weightSecond: 0.5,
                        priceTotal2: 16.48,
                        postTime: "3-5",
                        maxWeightFree: 1.8,
                        max_postTime: 5,
                        priceRegister: 0,
                        freightOtherSub: 0,
                        maxWeightNotFree: 1.6,
                        priceTotal: 16.48,
                        name: "Expedited",
                        freightCouponSub: 0,
                        min_postTime: 3,
                        priceBase: 0,
                        state: 0,
                        maxOrderPrice: -1,
                        order: "10"
                    },
                    {
                        expressRule: "Standard|0.5:96.18:0.5:32.56:6-7",
                        priceAll: 14.63,
                        weightFirst: 0.5,
                        priceFirst: 96.18,
                        priceSecond: 32.56,
                        expressType: "Standard",
                        discount: 0,
                        weightSecond: 0.5,
                        priceTotal2: 14.63,
                        postTime: "6-7",
                        maxWeightFree: 1.8,
                        max_postTime: 7,
                        priceRegister: 0,
                        freightOtherSub: 0,
                        maxWeightNotFree: 1.6,
                        priceTotal: 14.63,
                        name: "Standard",
                        freightCouponSub: 0,
                        min_postTime: 6,
                        priceBase: 0,
                        state: 0,
                        introduction: "Generally use EMS or other courier sent, Mascot Costumes can only choose standard mode of transport.",
                        maxOrderPrice: -1,
                        order: "11"
                    },
                    {
                        expressRule: "SuperSaver|84:97:6:7-15:900",
                        priceAll: 3.39,
                        weightFirst: 0,
                        priceFirst: 0,
                        priceSecond: 0,
                        expressType: "SuperSaver",
                        discount: 97,
                        weightSecond: 0,
                        priceTotal2: 3.39,
                        postTime: "7-15",
                        maxWeightFree: 1.8,
                        max_postTime: 15,
                        priceRegister: 6,
                        freightOtherSub: 0,
                        maxWeightNotFree: 1.6,
                        priceTotal: 3.39,
                        name: "Super Saver Shipping",
                        freightCouponSub: 0,
                        min_postTime: 7,
                        priceBase: 84,
                        state: 0,
                        maxOrderPrice: 900,
                        order: "13"
                    }
                ],
                pricePoint: 2,
                websiteIdLastView: 1,
                insurancePrice: 1.99,
                websiteCarts: [
                    {
                        websiteName: "Milanoo",
                        websiteId: 1,
                        domainName: "www.milanoo.com",
                        savedProducts: [],
                        empty: false,
                        products: [
                            {
                                maxStockingTime: 10,
                                productPriceTotalRate: 20.99,
                                freightFree: 1,
                                allPropertyPriceRate: 0,
                                referType: "",
                                productPriceTotal: 20.99,
                                productsWeight: 0.2,
                                productName: "Multicolor Maxi Dress With Print Split Chiffon for Women",
                                sourcePriceRate: 41.98,
                                websiteId: 1,
                                argsPriceRate: 0,
                                productsPrice: 20.99,
                                productStockTime: 9,
                                sku: {
                                    occupyStockQuantity: 0,
                                    productId: 580577,
                                    skuPropertyArr: [
                                        {
                                            propertyName: "Size",
                                            price: 0,
                                            configurationName: "S ",
                                            configurationId: 985,
                                            configurationValue: "size01",
                                            propertyId: 360,
                                            colorProperty: 2
                                        },
                                        {
                                            propertyName: "Color",
                                            price: 0,
                                            configurationName: "Pink ",
                                            configurationId: 4703,
                                            configurationValue: "Pink",
                                            propertyId: 769,
                                            colorProperty: 1
                                        }
                                    ],
                                    sellQuantity: 0,
                                    stockQuantity: 0,
                                    skuType: 1,
                                    isActivate: 1,
                                    skuCode: "S00000580577000002",
                                    skuId: 39315793,
                                    fastDelivery: 1
                                },
                                skuId: 39315793,
                                productId: 580577,
                                minStockingTime: 0,
                                cartId: 52238009,
                                minCartStockDay: 0,
                                dataStatus: 0,
                                propertyVos: [
                                    {
                                        propertyValue: "size01",
                                        propertyId: 360
                                    },
                                    {
                                        propertyValue: "Pink",
                                        propertyId: 769
                                    }
                                ],
                                fastDelivery: 1,
                                promotionProductSingle: 1,
                                virtualWeight: 0.2,
                                productsPriceRate: 20.99,
                                allPropertyPrice: 0,
                                parcels: "0",
                                salePropertyPrice: 0,
                                additionalPrice: 28.49,
                                argsPrice: 0,
                                buyNum: 1,
                                freightFreeCoupon: 1,
                                gmtModify: "2016-07-05",
                                additional: "587671",
                                categoryName: "Maxi Dresses",
                                giftPriceRate: 0,
                                sourcePrice: 41.98,
                                firstPictureUrl: "tb2016/tb201603/tb20160325/f5fc93d8-013d-4b6e-b4da-be552cbf6716.jpg",
                                payPriceRate: 20.99,
                                giftFreightFree: 0,
                                payPrice: 20.99,
                                giftPrice: 0,
                                freightFreeNoCoupon: 1,
                                isGift: 0,
                                propertiesOfDB: "360|size01,769|Pink",
                                unitPriceOfDB: 20.99,
                                productType: 3,
                                customPrice: 0,
                                tied: 1,
                                salePropertyPriceRate: 0,
                                customPriceRate: 0,
                                isAdditionalProduct: 0,
                                categoryCode: "000000132401029",
                                gmtCreate: "2016-07-05",
                                freightFreeSingle: 1,
                                productCode: "#10290580577",
                                categoryId: 1029,
                                promotion: {
                                    promotionDiscount: 50,
                                    promotionName: "8TH ANNIVERSARY SALE",
                                    promotionType: "8TH ANNIVERSARY SALE",
                                    superposition: 1,
                                    promotionPrice: 20.99
                                }
                            }
                        ]
                    }
                ],
                cartPriceDropshipTotal: 0,
                langId: 2,
                orderCouponSingle: 1,
                couponInvalid: []
            },
            productNum: 1
        };
        tester.get(__path() + 'cookieId=nocookie&memberId=3661645&priceUnit=USD&countryId=&countryCode=&languageCode=en-uk&promotionKey=SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104&deviceType=5&autoAddGiftFlag=1&websiteId=1&websiteIdLastView=1')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                JSON.stringify(res.body).should.equal(JSON.stringify(expected));
                done();
            });
    });
});