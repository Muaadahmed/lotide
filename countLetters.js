const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

const countLetters = function(sentence) {
  let result = {};

  for(let letter of sentence){
    let letterSmall = letter.toLowerCase();
    if(result[letterSmall]){
      result[letterSmall] += 1
    } else {
      if(letterSmall !== ' '){
        result[letterSmall] = 1;
      }
    }
  }

  return result;
};

console.log(countLetters('lighthouse in the house'));