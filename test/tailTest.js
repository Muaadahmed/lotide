// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('tail', () => {
  it('return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(["Lighthouse", "Labs"], tail(["Hello", "Lighthouse", "Labs"]));
  });
  it('return ["Welcome", "Hello", "Lighthouse", "Labs"] for ["To", "Welcome", "Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["To", "Welcome", "Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Welcome", "Hello", "Lighthouse", "Labs"]);
  });
  it('return "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], 'Labs');
  });
  it('return 2 for tail.length', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });
});