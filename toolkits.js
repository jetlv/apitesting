/// <reference path="./include.d.ts" />

var os = require('os');
var conf = require('./configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 */
module.exports.getPath = function (fname, type) {
    var sep = CONST['SEP_' + os.platform()];
    var fArray = fname.split(sep);
    var path = '';
    /** type = 1 means Nileoo api */
    if (type === 1) {
        path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'json') + '?';
    } else {
        path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    }
    return path;
}