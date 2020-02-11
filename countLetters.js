const countLetters = function(sentence) {
  const results = {};
  if (sentence) {
    sentence = sentence.split(' ').join('');

    for (const letter of sentence) {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;