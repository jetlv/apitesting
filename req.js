var fs = require('fs');
var os = require('os');
var supertest = require('supertest');
var should = require("should");
var conf = require('./configuration.js');
var CONST = conf.CONST;
var util = require('./toolkits.js');
var __path = util.getPath;
var expect = require('chai').expect;
var deep = require('deep-diff')
var observableDiff = require('deep-diff').observableDiff;

module.exports = {
    fs : fs,
    os : os,
    supertest : supertest,
    should : should,
    conf : conf,
    CONST : conf.CONST,
    util : util,
    __path : __path,
    expect: expect,
    deep : deep, 
    observableDiff : observableDiff
}