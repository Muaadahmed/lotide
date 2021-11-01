const middle = function(array){
  let arr = [];

  let middNum = Math.ceil(array.length / 2);

  if(middNum === 0 || array.length < 3){
    return arr;
  } else if (array.length % 2 === 0){
    arr.push(middNum);
    arr.push(array[array.indexOf(middNum) + 1]);
  } else {
    arr.push(middNum);
  }

  return arr;
}

module.exports = middle;