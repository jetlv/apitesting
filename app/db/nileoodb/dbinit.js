/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var mysql = require('promise-mysql');

var database_seller_name = 'nileoo_seller_test';
var database_root_name = 'nileoo_root_test';

/**
 *
 * @type {{host: string, user: string, password: string, database: string}}
 * index 为 0
 */
var connect_seller = {
    host: '192.168.11.117',
    user: 'zhaoying',
    password: 'zhaoying123',
    database: database_seller_name
};

/**
 *
 * @type {{host: string, user: string, password: string, database: string}}
 * index 为 1
 */
var connect_root = {
    host: '192.168.11.117',
    user: 'zhaoying',
    password: 'zhaoying123',
    database: database_root_name
}

var databases = [];
databases.push(connect_seller);
databases.push(connect_root);

var connect = function(index) {
    return mysql.createConnection(databases[index]);
}

describe('Nileoo数据初始化测试', function () {

    before(function() {
        this.skip();
    });

    it('商品店铺至少2个', function (done) {
        var query = 'select s.shop_id from shop s';
        connect(0).then(function (conn) {
            connection = conn;
            return connection.query(query);
        }).then(function (results) {
            expect(results.length, "验证失败 - 商铺数量小于2").greaterThan(2);
            done();
        }).catch(function (err) {
            done(err.message);
        });
    });

    it('商品批发表不能出现重复的梯度', function (done) {
        var query = 'select multiple.product_id, multiple.start_quantity from (SELECT * FROM nileoo_seller_test.product_wholesale_setting pws WHERE pws.product_id IN (SELECT pws.product_id FROM nileoo_seller_test.product_wholesale_setting pws GROUP BY pws.product_id HAVING COUNT(*) > 1)) multiple group by multiple.product_id, multiple.start_quantity having count(*) > 1';
        connect(0).then(function (conn) {
            connection = conn;
            return connection.query(query);
        }).then(function (results) {
            expect(results.length, "验证失败 - 某些商品含有重复梯度").eql(0);
            done();
        }).catch(function (err) {
            done(err.message);
        });
    });

    it('存在定价的商品', function (done) {
        var query = 'select multiple.product_id, multiple.start_quantity from (SELECT * FROM nileoo_seller_test.product_wholesale_setting pws WHERE pws.product_id IN (SELECT pws.product_id FROM nileoo_seller_test.product_wholesale_setting pws GROUP BY pws.product_id HAVING COUNT(*) = 1)) multiple';
        connect(0).then(function (conn) {
            connection = conn;
            return connection.query(query);
        }).then(function (results) {
            expect(results.length, "验证失败 - 不存在定价的商品").greaterThan(1);
            done();
        }).catch(function (err) {
            done(err.message);
        });
    });

    it('所有商品必须有价', function (done) {
        var query = 'select * from product p where p.id not in (select pws.product_id from nileoo_seller_test.product_wholesale_setting pws)';
        connect(0).then(function (conn) {
            connection = conn;
            return connection.query(query);
        }).then(function (results) {
            expect(results.length, "验证失败 - 含有无价商品").eq(0);
            done();
        }).catch(function (err) {
            done(err.message);
        });
    });

    it('SKU批发表不能出现重复的梯度', function (done) {
        var query = 'SELECT * FROM ( SELECT * FROM nileoo_seller_test.sku_wholesale_setting pws WHERE pws.sku_id IN ( SELECT pws.sku_id FROM nileoo_seller_test.sku_wholesale_setting pws GROUP BY pws.sku_id HAVING COUNT(*) > 1)) multiple GROUP BY multiple.sku_id, multiple.start_quantity HAVING COUNT(*) > 1';
        connect(0).then(function (conn) {
            connection = conn;
            return connection.query(query);
        }).then(function (results) {
            expect(results.length, "验证失败 - 某些商品含有重复梯度").eql(0);
            done();
        }).catch(function (err) {
            done(err.message);
        });
    });

});
