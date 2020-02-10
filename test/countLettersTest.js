
const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house").l, 1);