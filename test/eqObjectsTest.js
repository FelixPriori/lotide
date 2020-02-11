const eqObjects = require('../eqObjects');

const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true when two objects with number values are completely identical", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true);
  });
  it("should return false when two objects with number values are different", () => {
    const ab = { a: "1", b: "2" };
    const ac = { a: "2", c: "3" };
    assert.equal(eqObjects(ab, ac), false);
  });
  it("should return true when objects of arrays are completely identical", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true);
  });
  it("should return true when objects of objects are completeley identical", () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("should return true when objects of nested objects are completely identical", () => {
    assert.equal(eqObjects({ thing: { stuffs: 3, things: 2}, heyo: {heya: 1}}, { thing: { stuffs: 3, things: 2}, heyo: {heya: 1}}), true);
  });
});