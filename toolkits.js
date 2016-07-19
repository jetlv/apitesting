/// <reference path="./include.d.ts" />

var os = require('os');
var conf = require('./configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 */
module.exports.getPath = function (fname) {
    var sep = CONST['SEP_' + os.platform()];
    var fArray = fname.split(sep);
    var path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    return path;
}