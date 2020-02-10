const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const results2 = map(numbers, number => number * number);
assertArraysEqual(results2, [1, 4, 9, 16, 25, 36, 49, 64]);

const animals = ['bunny', 'kitty', 'doggy'];
const results3 = map(animals, animal => `${animal} needs attention`);
assertArraysEqual(results3, ['bunny needs attention', 'kitty needs attention', 'doggy needs attention']);