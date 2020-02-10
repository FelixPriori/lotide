# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @felixpriori/lotide`

**Require it:**

`const _ = require('@felixpriori/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of the passed array.
* `tail(array)`: returns the passed array minus the first element.
* `middle(array)`: returns the middle value(s) of the passed array. 
* `assertArraysEqual(array1, array2)`: asserts the equality of the two passed arrays. 
* `assertEqual(element1, element2)`: compares the two passed elements and asserts their equality.
* `assertObjectEqual(object1, object2)`: compares the two passed objects and returns and asserts their equality. 
* `compareElements(element1, element2)`: returns true or false depending on if the passed elements are equal or not.
* `countLetters(sentence)`: counts the letters in the passed sentence. 
* `countOnly(allItems, itemsToCount)`: counts the designated item and returns the count as an object with the key being the item, and the value being its count.
* `eqArrays(array1, array2)`: compares the two passed arrays and returns a true or false value depending on if they are equal or not.
* `eqObjects(object1, object2)`: compares the two passed objects and returns a true or false value depending on if they are equal or not.
* `findKey(object, callback)`: scans the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue(object, key)`: scans the object and return the first key which contains the given value.
* `flatten(array)`: Takes an array of arrays and return a "flattened" version of the array.
* `letterPositions(sentence)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `map(array, callback)`: takes in an array, applies modifications specified in the callback, then returns elements in the array.
* `takeUntil(array, callback)`: will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(array, itemsToRemove)`: will return a subset of a given array, removing unwanted elements.