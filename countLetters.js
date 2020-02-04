const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  sentence = sentence.split(' ').join('');
  const results = {};
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house").l, 1);