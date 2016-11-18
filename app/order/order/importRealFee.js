/// <reference path="../../../include.d.ts" />
var conf = require('../../../configuration.js');
var CONST = conf.CONST;
var R = require('../../../req.js');
var expect = R.expect;
var __path = R.__path;
var Promise = require('bluebird');
var supertest = R.supertest;
var ew = require('node-xlsx');
var rp = require('request-promise');
var fs = require('fs');

var env = CONST.NILEOO_ADDRESS_TESTENV;
var tester = supertest.agent(env);
var mhelper = supertest.agent(CONST.MHELPER_ADDRESS);

/** 本case连打单一起测试 */

describe('Nileoo打单导入Excel更新重量和运费', function () {
    var order;
    var trackingNumber;
    it('构造一个订单', function (done) {
        var url = '/api/nileoo/order/addrandom';
        var params = '';
        mhelper.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.code).equal(1);
                    return body;
                }).then(body => {
                    expect(body.order).not.null;
                    order = body.order;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + CONST.MHELPER_ADDRESS + url + params + '\r\n\r\n' + 'Actual output: ' + (res ? JSON.stringify(res.body) : '') + '\r\n');
                });
            });
    });

    it('打单', function (done) {
        var url = '/logistics/logistics/print.json';
        var params = '?ids=' + order.id + '&memberId=1';
        tester.get(url + params)
            .end(function (err, res) {
                new Promise(function (resolve, reject) {
                    var body = res.body;
                    resolve(body);
                }).then(body => {
                    expect(body.result.length).equal(1);
                    var source = body.result[0];
                    trackingNumber = source.match(/&quot;(\d{12})/)[1];
                    expect(trackingNumber).not.null;
                    done();
                    return body;
                }).catch(err => {
                    done(err + '\r\n\r\n' + 'FullPath is : ' + env + url + params + '\r\n\r\n' + 'Actual output: ' + (res ? JSON.stringify(res.body) : '') + '\r\n');
                });
            });
    });

    it('构造Excel并导入', function (done) {
        var columns = ['Tracking Number', 'Shipper Reference', 'Weight', 'Price', 'delivery'];
        var sheet = { name: 'temp', data: [] };
        sheet.data.push(columns);
        sheet.data.push([trackingNumber, order.orderNumber, '6.6', '7.7', 'FedexIP']);
        var buffer = ew.build([sheet]);
        var tempFile = 'temp.xls';
        fs.writeFileSync(tempFile, buffer);
        var uploadUrl = 'http://192.168.11.13:8080/fs/nileooFile/uploadNileooLogistics.htm';
        var readStream = fs.createReadStream(tempFile);
        var formData = {
            fileData: readStream
        }
        var uploadOptions = {
            uri: uploadUrl,
            method: 'POST',
            gzip: true,
            formData: formData,
            json: true
        }
        var importFeeUrl;
        rp(uploadOptions)
            .then(body => {
                fs.unlinkSync(tempFile);
                var fp = body.filePath;
                return fp;
            }).then(fp => {
                importFeeUrl = 'http://192.168.12.40:8080/order/order/importRealFee.json?url=' /**+ 'http://192.168.11.67/upload/nileoo/logistics_excel/o/'*/ + fp;
                var importOptions = {
                    uri: importFeeUrl,
                    method: 'POST',
                    json: true,
                    gzip: true
                }
                return rp(importOptions)
                    .then(body => {
                        expect(body.msg).equal('success.');
                        done();
                        return body;
                    });
            }).catch(error => {
                done('在导入excel时候出错 ' + error + '\r\n' + ' Fullpath: ' + importFeeUrl);
            });
    });


    it('验证更新后的价格和重量', function (done) {
        var url = 'http://192.168.12.40:8080/order/order/getOrderPages.json?memberId=1&pageNo=1&pageSize=10&trackNumber=' + trackingNumber;
        var options = {
            uri: url,
            method: 'GET',
            json: true,
            gzip: true
        }

        rp(options)
            .then(body => {
                expect(body.result.result.length).equal(1);
                expect(body.result.result[0].realTotalWeight).equal(6.6);
                expect(body.result.result[0].costDeliveryPrice).equal(7.7);
                done();
            }).catch(error => {
                done('Validation error ' + error + 'Fullpath : ' + url);
            });
    });
});