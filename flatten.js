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
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(collection) {
  const flattened = [];
  for (let item of collection) {
    if (Array.isArray(item)) {
      for (let insideItem of item) {
        flattened.push(insideItem);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);