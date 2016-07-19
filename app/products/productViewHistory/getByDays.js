/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;

var tester = supertest.agent('http://app.milanoo.com');

describe('获取浏览记录', function () {
    it('获取500天的浏览记录', function (done) {
        var expected = {
            msg: "操作成功",
            code: "0",
            list: [
                {
                    num: 1,
                    day: 1459440000,
                    products: [
                        {
                            stockOut: 0,
                            marketPrice: 37.380001068115234,
                            productCid: "24920237648",
                            productId: "237648",
                            categoryCode: "0139901559",
                            fristPictureUrl: "201506/20150611/Fashion-Black-PU-Leather-Strap-Womens-Shoe-Accessories-237648-1062954.jpg",
                            stock: 0,
                            productName: "Fashion Black PU Leather Strap Women's Shoe Accessories",
                            productPrice: 17.989999771118164
                        }
                    ]
                }
            ]
        };
        tester.get(__path(__filename) + 'cookieId=d89494b768dff5a36d273d60da2e0a6e&memberId=3654797&websiteId=1&languageCode=en-uk&days=500')
            .expect(200)
            .end(function (err, res) {
                res.should.be.json;
                res.body.should.eql(expected);
                done();
            });
    });
});