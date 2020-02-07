const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);