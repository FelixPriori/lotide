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

module.exports = countLetters;