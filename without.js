const assertArraysEqual = require('./assertArraysEqual');

const without = function(collection, unwanted) {
  let wanted = [];
  for (let item of collection) {
    if (unwanted.indexOf(item) === -1) {
      wanted.push(item);
    }
  }
  return wanted;
};

module.exports = without;

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]