/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe('列表页及搜索接口', function () {
    it('根据id搜索单个商品', function (done) {
        var expected = {
            "msg": "操作成功",
            "categoryBreadcrumbNavigation": {

            },
            "code": "0",
            "propertyArrayName": {

            },
            "definedPropertyResults": [{
                "propertyName": "Season",
                "productNum": 3,
                "list": [{
                    "colorName": "Spring",
                    "valueId": "513",
                    "value_en": "Spring",
                    "productNum": 1,
                    "propertyId": "100513",
                    "value": "Spring",
                    "follow_flag": "follow"
                },
                    {
                        "colorName": "Fall",
                        "valueId": "514",
                        "value_en": "Fall",
                        "productNum": 1,
                        "propertyId": "100513",
                        "value": "Fall",
                        "follow_flag": "follow"
                    },
                    {
                        "colorName": "Summer",
                        "valueId": "516",
                        "value_en": "Summer",
                        "productNum": 1,
                        "propertyId": "100513",
                        "value": "Summer",
                        "follow_flag": "follow"
                    }],
                "propertyId": "100513",
                "propertyName_en": "Season"
            },
                {
                    "propertyName": "Shown Color",
                    "productNum": 2,
                    "list": [{
                        "colorName": "White",
                        "valueId": "2510",
                        "value_en": "White",
                        "colorCode": "FFFFFF",
                        "productNum": 1,
                        "propertyId": "102509",
                        "value": "White",
                        "follow_flag": "follow"
                    },
                        {
                            "colorName": "Blue",
                            "valueId": "2519",
                            "value_en": "Blue",
                            "colorCode": "0000FF",
                            "productNum": 1,
                            "propertyId": "102509",
                            "value": "Blue",
                            "follow_flag": "follow"
                        }],
                    "propertyId": "102509",
                    "propertyName_en": "Shown Color"
                },
                {
                    "propertyName": "Price Range",
                    "list": [{
                        "valueId": "0:0",
                        "checked": "false",
                        "productNum": 0,
                        "value": "Under-0",
                        "follow_flag": "nofollow"
                    },
                        {
                            "valueId": "0:10",
                            "checked": "false",
                            "productNum": 1,
                            "value": "0-10",
                            "follow_flag": "nofollow"
                        },
                        {
                            "valueId": "10:*",
                            "checked": "false",
                            "productNum": 0,
                            "value": "10-Above",
                            "follow_flag": "nofollow"
                        }],
                    "propertyId": "priceRange"
                }],
            "topSellingResults": [],
            "listResults": {
                "pageNo": "1",
                "maxProCategory": "0139901559",
                "pageSize": "24",
                "returnTopSellingNum": 0,
                "languageCode": "en-uk",
                "minProductPrice": 6.989999771118164,
                "totalCount": 1,
                "results": [{
                    "marketPrice": 22.079999923706055,
                    "productName_en": "Elegant Glitter Crochet Fashion Barefoot Shoe Accessoriess",
                    "independentDesign": 0,
                    "productName": "Elegant Glitter Crochet Fashion Barefoot Shoe Accessoriess",
                    "customFlag": 0,
                    "websiteId": 1,
                    "review": 0,
                    "stockNum": 0,
                    "productConfiguration": ["Group||||Women",
                        "Occasion||||Beach||||Wedding",
                        "Style||||Sexy||||Elegant",
                        "Shown Color||||White||||Blue"],
                    "productPriceRate": 6.99,
                    "marketPriceRate": 22.08,
                    "imgs": ["tb2013/tb201305/tb20130529/52850f65-1dcb-49c4-9f85-881e4acfac7d.jpg",
                        "tb2013/tb201305/tb20130529/adc8cfb4-4e48-4d9d-8bff-531c77cbcae8.jpg",
                        "tb2013/tb201305/tb20130529/a432f84b-d1d1-4580-9ddc-35f7077ba18c.jpg",
                        "tb2013/tb201305/tb20130529/75b0f2f9-af61-4cd3-b07e-35e2eb5eeeda.jpg",
                        "tb2013/tb201305/tb20130529/5d2b8a9d-9230-4e03-b482-da3aa279b204.jpg",
                        "tb2013/tb201305/tb20130529/261c2280-879b-41a2-8787-d0a317678ae4.jpg"],
                    "O2OFlag": 0,
                    "tied": 1,
                    "productId": "307640",
                    "introduce": "",
                    "pictureUrl": "tb2013/tb201305/tb20130529/52850f65-1dcb-49c4-9f85-881e4acfac7d.jpg",
                    "productPictureType": 0,
                    "categoryCode": "0139901559",
                    "stars": 0,
                    "fastDelivery": 1,
                    "productCid": "24920307640",
                    "haveVideo": 0,
                    "additionalProducts": "",
                    "addedTime": "2013-05-29",
                    "productsParcels": "0",
                    "productRecommend": 0,
                    "productPrice": 6.989999771118164
                }],
                "maxProductPrice": 6.989999771118164,
                "searchContent": "307640"
            },
            "productCategory": {
                "seoMeta": "",
                "isLast": "0",
                "categoryAliasName": "",
                "productsNumAll": 0,
                "categoryCode": "",
                "categoryIntroduce": "",
                "seoTitle": "",
                "childrenList": [{
                    "displayStyle": 2,
                    "categoryAliasName": "",
                    "categoryLogUrl": "2014/201412/20141225/en-uk_Logo_20141225102150.png",
                    "categoryName_en": "Shoes",
                    "productsNumAll": 1,
                    "categoryCode": "01399",
                    "childrenList": [{
                        "displayStyle": 1,
                        "categoryAliasName": "",
                        "categoryLogUrl": "2012/201207/20120704/en-uk_Logo_20120704120507.jpg",
                        "categoryName_en": "Shoes Accessories",
                        "productsNumAll": 1,
                        "categoryCode": "0139901559",
                        "categoryName": "Shoes Accessories",
                        "categoryId": 2492,
                        "categoryNavigationName": ""
                    }],
                    "categoryName": "Shoes",
                    "categoryId": 1399,
                    "categoryNavigationName": ""
                }],
                "categoryName": "",
                "categoryId": "",
                "categoryNavigationName": ""
            }
        }
        tester.get(__path(__filename) + 'pcs.languageCode=en-uk&pcs.searchContent=307640')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                done();
            });
    });
});