const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false