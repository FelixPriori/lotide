
const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("should return an empty object if nothing is passed as argument", () => {
    const isObject = (typeof countLetters() === 'object' && countLetters() !== null);
    assert.equal(isObject, true);
  });
  it("should return an empty object if an empty string is passed as argument", () => {
    const isObject = (typeof countLetters('') === 'object' && countLetters('') !== null);
    assert.equal(isObject, true);
  });
  it("should return an object with each letter's count as key-value pair", () => {
    const input = 'lighthouse in the house';
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    assert.deepEqual(countLetters(input), expected);
  });
  it("should not count the spaces", () => {
    const input = 'lighthouse in the house';
    assert.equal(countLetters(input)[' '], undefined);
  });
});