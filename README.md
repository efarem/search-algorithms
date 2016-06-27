# Searchesmun

[![Travis Build](https://img.shields.io/travis/efarem/searchesmun.svg?style=flat-square)](https://travis-ci.org/efarem/searchesmun)
[![Codecov coverage](https://img.shields.io/codecov/c/github/efarem/searchesmun.svg?style=flat-square)]()
[![NPM Version](https://img.shields.io/npm/v/searchesmun.svg?style=flat-square)](https://www.npmjs.com/package/searchesmun)

A JavaScript library for all of your favorite search algorithms.

### Currently supports
- Binary Search

### Installation
`npm install --save searchesmun`

### Usage

The search function requires a `compare` callback function which needs to
return one of `-1`, `0` or `1`.

- Return `-1` If the value being searched for is less than the current value being compared.
- Return `0` If the value being searched for is equal to the current value being compared.
- Return `-1` If the value being searched for is more than the current value being compared.

````
var search = require('searchesmun');

var items = [1,4,8,19,29];

search.binary(19, items, function (x, y) {
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  }
  return 0;
});
````
