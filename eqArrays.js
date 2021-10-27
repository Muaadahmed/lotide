const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let result = false;
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      el1 === el2 ? result = true : result = false;
    }
  }
  return result;
};

assertEqual(eqArrays([1,2,"3"], [1,2,3]), true);