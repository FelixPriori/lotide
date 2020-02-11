const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return false when two arrays have different lengths", () => {
    assert.equal(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("should return true when two arrays of numbers are completely identical", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false when two arrays of numbers are different", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true when two arrays of string of numbers are completely identical", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return false when two arrays have a different type (but same numbers)", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should return false when two arrays with different levels but same value are equal", () => {
    assert.equal(eqArrays([[2], [3, [4]]], [[2, 3], [4]]), false);
  });
  it("should return true when two arrays with nested arrays have the same values", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});