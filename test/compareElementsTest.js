const compareElements = require('../compareElements');
const assert = require('chai').assert;

describe("#compareElements", () => {
  it("should return true if two strings are identical", () => {
    assert.equal(compareElements('hello', 'hello'), true);
  });
  it("should return false if two strings are different", () => {
    assert.equal(compareElements('hello', 'world'), false);
  });
  it("should return true if two numbers are identical", () => {
    assert.equal(compareElements(1, 1), true);
  });
  it("should return false if two numbers are different", () => {
    assert.equal(compareElements(1, 2), false);
  });
  it("should return false if a number is passed as string compared to the same number as a number", () => {
    assert.equal(compareElements(1, '1'), false);
  });
});