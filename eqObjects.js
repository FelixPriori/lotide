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
    } else if (!compareElements(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ac = { a: "2", c: "3" };
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, ac)); // ==> false

const abc = { a: "1", b: "2", c: "3" };
const bcd = { b: "2", c: "3", d: "4" };
const dcb = { d: "4", c: "3", b: "2" };
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(dcb, bcd)); // => true;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false