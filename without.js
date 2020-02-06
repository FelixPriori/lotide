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

const without = function(collection, unwanted) {
  let wanted = [];
  for (let item of collection) {
    if (unwanted.indexOf(item) === -1) {
      wanted.push(item);
    }
  }
  return wanted;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]