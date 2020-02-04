const compareElements = function(e1, e2) {
  if (e1 === e2) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function(arr1, arr2) {
  equals = true;
  i = 0;
  while (equals && i < arr1.length){
    equals = compareElements(arr1[i], arr2[i]);
    i++;
  }
  if (equals){
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  let middleValue = [];

  if (arr.length <= 2) {

    return middleValue;

  } else if (arr.length % 2 === 0) {

    const middleIndexOne = arr.length / 2 - 1;
    const middleIndexTwo = arr.length / 2;
    middleValue.push(arr[middleIndexOne]);
    middleValue.push(arr[middleIndexTwo]);
    return middleValue;

  } else {

    const middleIndex = Math.floor(arr.length / 2);
    middleValue.push(arr[middleIndex]);
    return middleValue;

  }
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

assertArraysEqual(middle([1, 2, 3]), [2]);

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1]), []);

