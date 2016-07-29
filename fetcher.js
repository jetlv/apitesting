/// <reference path="./include.d.ts" />

var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var async = require('async');
const COLUMN_SEPARATOR = '         |          ';

/**
 * 写文件函数
 */
function writeFileByPath(level1, level2, fileName, content) {
    var options = { encoding: 'utf8', mode: 438 /*=0666*/, flag: 'w' };
    fs.exists('app/' + level1, function (exists) {
        if (!exists) {
            console.log('一级目录都不存在，文件必定不存在');
            fs.mkdir('app/' + level1, function (err) {
                fs.mkdir('app/' + level1 + '/' + level2, function (err) {
                    fs.writeFile('app/' + level1 + '/' + level2 + '/' + fileName, "test", content, options, function (err) {
                        if (err) console.log(err);
                        console.log('app/' + level1 + '/' + level2 + '/' + fileName + ' 写入完毕');
                    });
                });
            });
        } else {
            console.log('一级目录存在，检查2级目录')
            fs.exists('app/' + level1 + '/' + level2, function (exists_2nd) {
                if (!exists_2nd) {
                    console.log('二级目录不存在,文件必定不存在');
                    fs.mkdir('app/' + level1 + '/' + level2, function (err) {
                        if (err) console.log(err);
                        fs.writeFile('app/' + level1 + '/' + level2 + '/' + fileName, content, options, function (err) {
                            if (err) console.log(err);
                            console.log('app/' + level1 + '/' + level2 + '/' + fileName + ' 文件写入完毕');
                            fs.appendFile('written.txt', 'app/' + level1 + '/' + level2 + '/' + fileName + ' 写入完毕\r\n', options, function (err) {
                                if (err) console.log(err);
                            });
                        });
                    });
                } else {
                    console.log('二级目录存在，检查文件是否存在');
                    fs.exists('app/' + level1 + '/' + level2 + '/' + fileName, function (fileExists) {
                        if (fileExists) {
                            console.log('文件存在，不必再写入');
                        } else {
                            fs.writeFile('app/' + level1 + '/' + level2 + '/' + fileName, content, options, function (err) {
                                if (err) console.log(err);
                                console.log('app/' + level1 + '/' + level2 + '/' + fileName + ' 写入完毕');
                                fs.appendFile('written.txt', 'app/' + level1 + '/' + level2 + '/' + fileName + ' 写入完毕\r\n', options, function (err) {
                                    if (err) console.log(err);
                                });
                            });
                        }
                    });
                }
            });
        }

    });
}
/**
 * 单个fetch，只抓有例子的
 */
function singleFetch(url, callback) {

    request.get(url, function (err, resp, body) {
        // fs.appendFileSync('body.txt', body);
        var $ = cheerio.load(body);
        // console.log($('.mainDiv .tableList').find('tr').eq(4).find('th').eq(1).text());
        var apiAccessLink = $('a').eq(2).attr('href');
        if (apiAccessLink) {
            console.log(apiAccessLink);
            var onlineFullPath = apiAccessLink.replace(/192.*\//, 'app.milanoo.com');
            var level1 = apiAccessLink.split('/')[4];
            var level2 = apiAccessLink.split('/')[5];
            var fileName = apiAccessLink.split('/')[6].split('?')[0].match(/\w+/)[0];
            var params = apiAccessLink.split('?')[1] ? apiAccessLink.split('?')[1] : '';
            var apiSum = $('.tableList tr').eq(2).find('td').eq(1).text();
            var tw = [];
            tw.push('//' + url);
            tw.push('\r\n');
            tw.push('/// <reference path="../../../include.d.ts" />\r\n');
            tw.push("var R = require('../../../req.js');\r\n");
            tw.push("var expect = R.expect;\r\n");
            tw.push("var __path = R.__path;\r\n");
            tw.push("var tester = R.supertest.agent('http://app.milanoo.com');\r\n");
            tw.push("\r\n");
            tw.push("describe('" + apiSum + "', function () {\r\n");
            tw.push("   it('基本验证', function (done) {\r\n");
            tw.push("       var fullPath = '" + onlineFullPath + "';");
            tw.push("       tester.get(__path(__filename) + '" + params + "')\r\n");
            tw.push("               .end(function (err, res) {\r\n");
            tw.push("                   expect(res.status).eql(200);\r\n");
            tw.push("                   done();\r\n");
            tw.push("});\r\n});\r\n});");
            var toWrite = tw.join('\r\n');
            try {
                writeFileByPath(level1, level2, fileName + '.js', toWrite);
            } catch (err) {
                fs.appendFileSync('error.log', err + ' ' + url + '\r\n');
            }
            console.log('I have done ' + url);
            callback();
        } else {
            console.log('I have done ' + url);
            callback();
        }
    });
}
/** 遍历java文档中心，做所有接口的基本代码生成 
 *  暂不适用 - 可能有危险接口
*/
function all() {
    var urls = [];

    for (var i = 1; i < 9000; i++) {
        (function (i) {
            var k = i;
            var url = "http://192.168.11.16:8680/doc/doc/detail.htm?methodId=" + k;
            urls.push(url);
        })(i);
    }

    async.mapLimit(urls, 4, function (url, callback) {
        singleFetch(url, callback);
    }, function (err) {
        if (err) console.log(err);
    });
}

/** 直接根据API文档写一个基本的js，不管有没有例子
 *  仅针对app/的接口
 * @param url 接口文档的地址
 * @fp 接口地址 optional
*/

function singleFetchApiWhatever(url, fp) {
    request.get(url, function (err, resp, body) {
        var $ = cheerio.load(body);
        var tw = [];
        tw.push('/**');
        /** 接口描述，作为describe的大标题 */
        var apiSum = $('.tableList tr').eq(2).find('td').eq(1).text();
        /** 接口参数描述 */
        var apiParamSum = '';
        if ($('.tableInner').text()) {
            $('.tableInner tr').each(function (index, line) {
                if (index === 0) {
                    tw.push($(this).find('th').eq(0).text().trim() + COLUMN_SEPARATOR + $(this).find('th').eq(1).text().trim() + COLUMN_SEPARATOR + $(this).find('th').eq(2).text().trim());
                    return;
                }
                tw.push($(this).find('td').eq(0).text().trim() + COLUMN_SEPARATOR + $(this).find('td').eq(1).text().trim() + COLUMN_SEPARATOR + $(this).find('td').eq(2).text().trim());
            });
        }
        tw.push('\r\n * /');
        tw.push('\r\n');

        var apiAccessLink = $('a').eq(2).attr('href');
        /** 文档中心有例子 且为app目录下的接口*/
        if (apiAccessLink && apiAccessLink.split('/')[3] === 'app') {
            // do nothing
        } else {
            if (!fp) {
                throw new Error('文档中心没有访问实例，请传入一个访问实例');
            }
            apiAccessLink = fp;
        }
        var onlineFullPath = apiAccessLink.replace(/192.*\/app/, 'app.milanoo.com/app');
        var level1 = apiAccessLink.split('/')[4];
        var level2 = apiAccessLink.split('/')[5];
        var fileName = apiAccessLink.split('/')[6].split('?')[0].match(/\w+/)[0];
        var params = apiAccessLink.split('?')[1] ? apiAccessLink.split('?')[1] : '';
        tw.push('//' + url);
        tw.push('\r\n');
        tw.push('/// <reference path="../../../include.d.ts" />\r\n');
        tw.push("var R = require('../../../req.js');\r\n");
        tw.push("var expect = R.expect;\r\n");
        tw.push("var __path = R.__path;\r\n");
        tw.push("var tester = R.supertest.agent('http://app.milanoo.com');\r\n");
        tw.push("\r\n");
        tw.push("describe('" + apiSum + "', function () {\r\n");
        tw.push("   it('基本验证', function (done) {\r\n");
        tw.push("       var fullPath = '" + onlineFullPath + "';");
        tw.push("       tester.get(__path(__filename) + '" + params + "')\r\n");
        tw.push("               .end(function (err, res) {\r\n");
        tw.push("                   expect(res.status).eql(200);\r\n");
        tw.push("                   done();\r\n");
        tw.push("});\r\n});\r\n});");
        writeFileByPath(level1, level2, fileName + '.js', tw.join('\r\n'));
    });
}

// singleFetchApiWhatever('http://192.168.11.16:8680/doc/doc/detail.htm?methodId=8476');

