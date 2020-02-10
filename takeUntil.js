const takeUntil = function(array, callback) {
  const result = [];
  let i = 0;
  let condition = false;
  while (i < array.length && !condition) {
    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      condition = true;
    }
    i++;
  }
  return result;
};

module.exports = takeUntil;