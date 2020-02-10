

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
