const tail = require('../tail');
const assert = require('chai').assert;
const {expect} = require('chai');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] when passed ['Hi', 'Lighthouse', 'Labs']", () => {
    expect(tail(['Hi', 'Lighthouse', 'Labs'])).to.eql(['Lighthouse', 'Labs']);
  });
});