const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

console.log(letterPositions('hello world'));
assertArraysEqual(letterPositions('hello world').h, [0]);
assertArraysEqual(letterPositions('hello world').e, [1]);
assertArraysEqual(letterPositions('hello world').l, [2, 3, 9]);
assertArraysEqual(letterPositions('hello world').o, [4, 7]);
assertArraysEqual(letterPositions('hello world').w, [6]);
assertArraysEqual(letterPositions('hello world').r, [8]);
assertArraysEqual(letterPositions('hello world').d, [10]);