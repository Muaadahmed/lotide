# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @muaadahmed123/lotide`

**Require it:**

`const _ = require('@muaadahmed123/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the array.
* `middle(arrayOfNumbers)`: Returns the number in the middle of the array, if the length of the array is even then it returns the middle 2 numbers.
* `tail(array)`: Returns everything in the array except for the first element.
* `assertArraysEqual(array, array)`: Compares 2 arrays and outputs to the console whether they are identical or not. 
* `assertEqual(actual, expected)`: Compares 2 values and outputs to the console whether they are identical or not.
* `assertObjectsEqual(object, object)`: Compares 2 objects and outputs to the console whether they are identical or not.
* `countLetters(string)`: counts the number of letters and how many times they appear. 
* `countOnly(array, object)`: Takes in an array of names and an object indicates what names to consider. Returns an object with the names and the number of times the names appear.
* `eqArrays(array, array)`: Returns true or false depending whether they are identical or not.
* `eqObjects(object, object)`: Returns true or false depending whether they are identical or not.
* `findKey(object, callback)`: The callback function loops through each key in the object and checks to see if the name matches the condition specified in the callback.
* `findKeyByValue(object, value)`: Checks to see if the value matches the value in the object key and returns the key of that value.
* `letterPositions(string)`: Returns an object with the position of the letters as the values in the form of an array and the letters as keys.
* `map(array, callback)`: Returns an array with the values in the array that match the callback function condition.
* `takeUntil(array, callback)`: Loops through the elements pushing them into an empty array and as soon as the callback function condition is met, the function exists the loop and returns the array.
* `without(array, array)`: Takes in a source array, removes items specified in the other array, and returns the altered source array.