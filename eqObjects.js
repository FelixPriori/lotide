const compareElements = require('./compareElements');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (!compareElements(keys1.length, keys2.length)) {
    return false;
  }
  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    } else if (!compareElements(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
