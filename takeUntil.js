const eqArrays = function(arr1, arr2) {
  let result = false;
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      el1 === el2 ? result = true : result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }
  return result;
};


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(assertArraysEqual([1,2,5,7,2] ,results1));
console.log(assertArraysEqual(["I've", "been", "to", "Hollywood"], results2));
