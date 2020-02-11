const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("should return an empty object if passed nothing as argument", () => {
    const isObject = (typeof countOnly() === 'object' && countOnly() !== null);
    assert.equal(isObject, true);
  });
  it("should return an empty object if passed an empty string as argument", () => {
    const isObject = (typeof countOnly('') === 'object' && countOnly('') !== null);
    assert.equal(isObject, true);
  });
  it("should return an object with each name's count as key-value pair", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.deepEqual(result, {'Jason': 1, 'Fang': 2});
  });
  it("should not have the key if the name specified is not in the list", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })['Karmina'];
    const expected = undefined;
    assert.equal(result, expected);
  });
});