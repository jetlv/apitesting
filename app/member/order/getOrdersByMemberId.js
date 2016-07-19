/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;


var tester = supertest.agent('http://app.milanoo.com');

describe('获取订单', function () {
    it('根据用户ID获取订单', function (done) {
        var expected = { "msg": "操作成功", "code": "0", "orderInfo": [{ "discountList": [], "orderPayDetail": [], "productList": [{ "isComment": -1, "buyNum": 1, "orderId": 3284795, "totalPrice": 41.29, "productName_en": "Light Pink Rhinestone Bow Pointed Toe Satin Bridal Pumps ", "productsWeight": "0.8", "productName": "Light Pink Rhinestone Bow Pointed Toe Satin Bridal Pumps ", "sourcePrice": 58.99, "rmaStatus": 1, "websiteId": 1, "productsPrice": 41.29, "payPrice": 41.29, "categoriesId": 3286, "freightDiscount": 1, "propertiesOfDB": "343|size012,769|9692", "sku": { "occupyStockQuantity": 0, "productId": 579045, "skuPropertyArr": [{ "propertyName": "Size", "price": 0, "configurationName": "US5(EU34 CN34)", "configurationId": 8246, "configurationValue": "size012", "propertyId": 343, "colorProperty": 2 }, { "propertyName": "Color", "price": 0, "configurationName": "Pink Gold", "configurationId": 9692, "configurationValue": "9692", "propertyId": 769, "colorProperty": 1 }], "sellQuantity": 0, "stockQuantity": 0, "skuType": 1, "isActivate": 1, "skuCode": "S00000579045000009", "skuId": 39301569, "fastDelivery": 1 }, "skuId": 39301569, "unitPrice": 41.29, "productId": 579045, "productsPicture": "tb2016/tb201603/tb20160322/7c91ddf3-75c2-496e-bbd4-2125d37dc921.jpg", "promotions": "", "productCode": "#32860579045", "virtualWeight": 0.8, "productsStockTime": 7, "cid": "#32860579045" }], "order": { "consigneeEmail": "getOrdersByMemberIdTester@milanoo.com", "addTime": 1460087623, "billingCtiy": "ttttttttttt", "estimateShipTime": "1460433223-1460778823", "billingStateFlag": "cn", "consigneeNameJa": "", "websiteId": 1, "logisticsCosts2": 0, "consigneeUrbanAreas": "tttttttttttttt", "ordersEstate": "UnderOrders", "memberId": 3662895, "deviceType": 5, "consigneeAddr": "ttttttttttttt|tttttttttt", "specialOrder": "4", "dicountOfVIP": 0, "priority": 2, "payClass": "", "fastDelivery": 0, "ordersCid": "en_mi_160408115343_895", "expressTime": 3, "logisticsName": "Standard", "promotionURL": "SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104", "addressSource": 0, "ordersPay": 0, "consigneeGender": 1, "stateFlag": "cn", "minViewStock": 4, "consigneeCity": "ttttttttttt", "billingPostalcode": "1231321321321", "billingGender": 1, "ordersUserIp": "182.151.205.165", "logistics": "Standard", "quickStockPrice": 0, "consigneeName": "Jetty|baba", "rmaStatus": 0, "websiteURL": 0, "consigneePhone": "+86 21321321313", "quickStockTime": 0, "billingName": "Jetty|baba", "shippingTime": 0, "lang": "en-uk", "ordersPayFeeamt": 0, "quickStock": 0, "logisticsCosts": 0, "amount": 41.290000915527344, "viewStock": 8, "stateId": 12, "billingUrbanAreas": "tttttttttttttt", "ordersId": 3284795, "minExpressTime": 1, "dicountOfDropship": 0, "insurancePrice": 2.99, "payTimes": 1, "consigneePostalcode": "1231321321321", "ordersBillingStateId": 12, "billingAddr": "ttttttttttttt|tttttttttt", "endTime": 1460951623, "currencyCode": "USD", "billingPhone": "+86 21321321313", "promotion": "SEM_1_en_gg_kw_c0_US_Milanoonewyear_160104" } }], "pageInfo": { "pageNo": 1, "pageSize": 5, "totalCount": 1 } };
        tester.get(__path(__filename) + 'websiteIdLastView=1&memberId=3662895&searchContent=&ordersEstate=0&type=&pageNo=1&pageSize=5&languageCode=en-uk&websiteIdFilter=&isComment=&websiteId=1&deviceType=5')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.containDeep(expected);
                done();
            });
    });
});