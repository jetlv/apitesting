/// <reference path="./include.d.ts" />

var chai = require('chai');

var expect = chai.expect;

var foo = 'bar';

expect(foo).to.not.equal('bar');
