const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//tests

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ac = { a: "2", c: "3" };
assertObjectsEqual(ab, ba); // => pass
assertObjectsEqual(ab, ac); // ==> fail

const abc = { a: "1", b: "2", c: "3" };
const bcd = { b: "2", c: "3", d: "4" };
const dcb = { d: "4", c: "3", b: "2" };
assertObjectsEqual(ab, abc); // => fail
assertObjectsEqual(dcb, bcd); // => pass;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => pass
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => fail