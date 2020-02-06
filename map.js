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

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const results2 = map(numbers, number => number * number);
assertArraysEqual(results2, [1, 4, 9, 16, 25, 36, 49, 64]);

const animals = ['bunny', 'kitty', 'doggy'];
const results3 = map(animals, animal => `${animal} needs attention`);
assertArraysEqual(results3, ['bunny needs attention', 'kitty needs attention', 'doggy needs attention']);
