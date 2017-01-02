/// <reference path="./include.d.ts" />

var os = require('os');
var conf = require('./configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 * @param type - 1 代表后缀为json
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

/** generate random str based on provided length */

module.exports.randomStr = function (len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}