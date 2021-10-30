const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  let result = false;
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  } else {
    for (let el1 of arr1) {
      for (let el2 of arr2) {
        el1 === el2 ? result = true : result = false;
      }
    }
  }
  return result;
};

const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  let checkIfTrue = false;
  // console.log(Array.isArray(object1[objectKeys1[1]]));
  
  if (objectKeys1.length !== objectKeys2.length) {
    checkIfTrue = false;
    return checkIfTrue;
  } else {
    for (let key of objectKeys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        checkIfTrue = eqArrays(object1[key], object2[key]);
        return checkIfTrue;
      } else {
        if (object1[key] === object2[key]) {
          checkIfTrue = true;
        }
      }
    }
  }
  return checkIfTrue;
};
// const ab = {a: '1', b: '2'};
// const ba = {b: '2', a: '1'};
// const abc = {a: '1', b: '2', c: '3'};

const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);