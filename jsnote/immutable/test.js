"use strict";
const { List, Set } = require("immutable");
const emptyList = List();
console.log(emptyList);

const plainArray = [1, 2, 3, 4];
const listFromPlainArray = List(plainArray);
console.log(listFromPlainArray);

const plainSet = Set([1, 2, 3, 4]);
const listFromPlainSet = List(plainSet);
console.log(listFromPlainSet);

const arrayIterator = plainArray[Symbol.iterator]();
const listFromCollectionArray = List(arrayIterator);
console.log(listFromCollectionArray);
