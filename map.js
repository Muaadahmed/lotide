const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];

  for(let word of array){
    // console.log('word: ', word);
    // console.log('callback on word: ', callback(word));
    results.push(callback(word));
  }
  return results;
};

//const echoWords = map(words, word => word[0]);

const eqArrays = function(arr1, arr2) {
  let result = false;
  if(arr1.length === 0 && arr2.length === 0){
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

const assertArraysEqual = function(arr1, arr2){
  eqArrays(arr1, arr2) ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}


console.log(assertArraysEqual(['g', 'c', 't', 'm', 't'], map(["ground", "control", "to", "major", "tom"], x => x[0])));
console.log(assertArraysEqual(['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'], map(["ground", "control", "to", "major", "tom"], x => x.toUpperCase())));
console.log(assertArraysEqual([2, 4, 6, 8, 10], map([1,2,3,4,5], x => x*2)));
