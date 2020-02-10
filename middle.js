const middle = function(arr) {
  let middleValue = [];

  if (arr.length <= 2) {

    return middleValue;

  } else if (arr.length % 2 === 0) {

    const middleIndexOne = arr.length / 2 - 1;
    const middleIndexTwo = arr.length / 2;
    middleValue.push(arr[middleIndexOne]);
    middleValue.push(arr[middleIndexTwo]);
    return middleValue;

  } else {

    const middleIndex = Math.floor(arr.length / 2);
    middleValue.push(arr[middleIndex]);
    return middleValue;

  }
};

module.exports = middle;

