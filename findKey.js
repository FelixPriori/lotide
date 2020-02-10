const findKey = function(obj, callback) {
  let keyName;
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      keyName = key;
      break;
    }
  }
  return keyName;
};

module.exports = findKey;