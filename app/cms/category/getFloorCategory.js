/// <reference path="../../../include.d.ts" />

var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var util = require('../../../toolkits.js');
var __path = util.getPath;
var chai = require('chai');
var expect = chai.expect;

var tester = supertest.agent('http://app.milanoo.com');

describe('楼层', function () {
    it('获取首页楼层', function (done) {
        var expected = {
            "msg": "操作成功",
            "code": "0",
            "list": [{
                "is_active": 1,
                "is_displaySonCate": 1,
                "top_key": "women",
                "cmsType": 6,
                "cmsTypeId": "",
                "display_style": 2,
                "pid": -1,
                "display_name": "Women",
                "is_display_red": 0,
                "is_wordOrPic": 1,
                "url": "/women-home/",
                "category_level": 0,
                "is_endColumn": 0,
                "children": [],
                "seo_name": "women",
                "is_displayCms": 1,
                "id": 25118,
                "position": 1738,
                "left_or_right": 1
            },
                {
                    "is_active": 1,
                    "is_displaySonCate": 1,
                    "top_key": "men",
                    "cmsType": 6,
                    "cmsTypeId": "",
                    "display_style": 2,
                    "pid": -1,
                    "display_name": "Men",
                    "is_display_red": 0,
                    "is_wordOrPic": 1,
                    "url": "/men-home/",
                    "category_level": 0,
                    "is_endColumn": 0,
                    "children": [],
                    "seo_name": "Men",
                    "is_displayCms": 1,
                    "id": 24578,
                    "position": 1744,
                    "left_or_right": 1
                },
                {
                    "is_active": 1,
                    "is_displaySonCate": 1,
                    "top_key": "wedding",
                    "cmsType": 1,
                    "cmsTypeId": "391",
                    "display_style": 2,
                    "pid": -1,
                    "display_name": "Wedding",
                    "is_display_red": 0,
                    "is_wordOrPic": 1,
                    "url": "/Buy-Wedding-c391",
                    "category_level": 0,
                    "is_endColumn": 0,
                    "children": [],
                    "seo_name": "Wedding",
                    "is_displayCms": 1,
                    "id": 24814,
                    "position": 1740,
                    "left_or_right": 1
                },
                {
                    "is_active": 1,
                    "is_displaySonCate": 1,
                    "top_key": "Shoes",
                    "cmsType": 1,
                    "cmsTypeId": "1399",
                    "display_style": 2,
                    "pid": -1,
                    "display_name": "Shoes",
                    "is_display_red": 0,
                    "is_wordOrPic": 1,
                    "url": "/Buy-Shoes-c1399",
                    "category_level": 0,
                    "is_endColumn": 0,
                    "children": [],
                    "seo_name": "Shoes",
                    "is_displayCms": 1,
                    "id": 24594,
                    "position": 1746,
                    "left_or_right": 1
                },
                {
                    "is_active": 1,
                    "is_displaySonCate": 1,
                    "top_key": "hobbies",
                    "cmsType": 1,
                    "cmsTypeId": "8709",
                    "display_style": 2,
                    "pid": -1,
                    "display_name": "Costumes",
                    "is_display_red": 0,
                    "is_wordOrPic": 1,
                    "url": "/Buy-Costume-c8709",
                    "category_level": 0,
                    "is_endColumn": 0,
                    "children": [],
                    "seo_name": "Costumes",
                    "is_displayCms": 1,
                    "id": 16382,
                    "position": 1742,
                    "left_or_right": 1
                }]
        };
        tester.get(__path(__filename) + 'websiteId=1&languageCode=en-uk&deviceType=1')
            .expect(200)
            .end(function (err, res) {
                expect(res.status).to.equal(200);
                expect(res.body.msg).to.equal("操作成功");
                expect(res.body.code).to.equal("0");
                // expect([res.body]).to.deep.include.members([expected]);
                done();
            });
    });
});