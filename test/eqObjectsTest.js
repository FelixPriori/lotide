const eqObjects = require('../eqObjects');


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ac = { a: "2", c: "3" };
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, ac)); // ==> false

const abc = { a: "1", b: "2", c: "3" };
const bcd = { b: "2", c: "3", d: "4" };
const dcb = { d: "4", c: "3", b: "2" };
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(dcb, bcd)); // => true;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ thing: { stuffs: 3, things: 2}, heyo: {heya: 1}}, { thing: { stuffs: 3, things: 2}, heyo: {heya: 1}})); // => true;