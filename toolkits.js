/// <reference path="./include.d.ts" />

var os = require('os');
var conf = require('./configuration.js');
var CONST = conf.CONST;

/**
 * get current api path
 */
module.exports.PathWorker = function () {
    var sep = CONST['SEP_' + os.platform()];
    var fArray = __filename.split(sep);
    this.path = '/' + fArray[fArray.length - 3] + '/' + fArray[fArray.length - 2] + '/' + fArray[fArray.length - 1].replace('js', 'htm') + '?';
    this.__path = function() {
        return this.path;
    }
}