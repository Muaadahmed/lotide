const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
//assertEqual(eqArrays([1,2,3], [1,2,3]), true);

describe("#eqArrays", () => {
  it('should return true for [1,2,3], [1,2,3]', () => {
    assert(eqArrays([1,2,3], [1,2,3]), true);
  });
});