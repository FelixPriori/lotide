const compareElements = require('../compareElements');

console.log(compareElements(1, 2)); // false
console.log(compareElements('hello', 'world')); // false
console.log(compareElements('hello', 'hello')); //true; 
console.log(compareElements('1', 1)); //false
console.log(compareElements(123123, 123123)); //true