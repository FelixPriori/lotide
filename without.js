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
