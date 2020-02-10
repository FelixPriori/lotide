const compareElements = require('./compareElements');

const eqArrays = function(arr1, arr2) {
  let equals = true;
  let i = 0;
  if (!compareElements(arr1.length, arr2.length)) {
    return false;
  }
  while (equals && i < arr1.length) {
    if (Array.isArray(arr1[i])) {
      equals = eqArrays(arr1[i], arr2[i]);
    } else {
      equals = compareElements(arr1[i], arr2[i]);
    }
    i++;
  }
  if (equals) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
