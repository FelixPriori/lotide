const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i] === ' ']) {
      // do nothing
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello world'));
module.exports = letterPositions;

assertArraysEqual(letterPositions('hello world').h, [0]);
assertArraysEqual(letterPositions('hello world').e, [1]);
assertArraysEqual(letterPositions('hello world').l, [2, 3, 9]);
assertArraysEqual(letterPositions('hello world').o, [4, 7]);
assertArraysEqual(letterPositions('hello world').w, [6]);
assertArraysEqual(letterPositions('hello world').r, [8]);
assertArraysEqual(letterPositions('hello world').d, [10]);