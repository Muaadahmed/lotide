const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
// assertArraysEqual([4], middle([1, 2, 3, 4, 5, 6, 7])); // => []
// assertArraysEqual([], middle([1, 2]));
// assertArraysEqual([3,4], middle([1, 2, 3, 4, 5, 6]));

describe('#middle', () => {
  it('return [4] for [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual([4], middle([1, 2, 3, 9, 5, 6, 7]));
  });
  it('return [] for [1, 2]', () => {
    assert.deepEqual([], middle([1, 2]));
  });
  it('return [3,4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual([3,4], middle([1, 2, 3, 4, 5, 6]));
  });
});