const compareElements = function(e1, e2) {
  if (e1 === e2) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function(arr1, arr2) {
  let equals = true;
  let i = 0;
  if (!compareElements(arr1.length, arr2.length)) {
    return false;
  }
  while (equals && i < arr1.length) {
    equals = compareElements(arr1[i], arr2[i]);
    i++;
  }
  if (equals) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Opposite :
// const assertArraysNotEqual = function(arr1, arr2) {
//   if (!eqArrays(arr1, arr2)){
//     console.log(`👍 Assertion Passed: ${arr1} !== ${arr2}`);
//   } else {
//     console.log(`👎 Assertion Failed: ${arr1} === ${arr2}`);
//   }
// }

assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false