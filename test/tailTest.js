const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] when passed ['Hi', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hi', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});