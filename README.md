# Searchesmun

[![Travis Build](https://img.shields.io/travis/efarem/searchesmun.svg?style=flat-square)](https://travis-ci.org/efarem/searchesmun)
[![Codecov coverage](https://img.shields.io/codecov/c/github/efarem/searchesmun.svg?style=flat-square)]()
[![NPM Version](https://img.shields.io/npm/v/searchesmun.svg?style=flat-square)](https://www.npmjs.com/package/searchesmun)
[![bitHound Overall Score](https://www.bithound.io/github/efarem/searchesmun/badges/score.svg)](https://www.bithound.io/github/efarem/searchesmun)

A JavaScript library for all of your favorite search algorithms.

### Currently supports
- Binary Search

### Installation
`npm install --save searchesmun`

### Usage

Basic example to search a sorted numeric array, returns the found value. Not
very useful on its own but see below for a more advanced use case.

````
const { search } = require('searchesmun');

const items = [1, 4, 8, 19, 29];

search.binary(19, items);
````

### Custom compare callback

You can add your own callback function which needs to
return one of `-1`, `0` or `1`.

**Important:** Your array needs to be sorted by the key you're searching, in the case below
the array is sorted by ID.

- Return `-1` If the value being searched for is less than the current value being compared.
- Return `0` If the value being searched for is equal to the current value being compared.
- Return `-1` If the value being searched for is more than the current value being compared.

````
const items = [
  { id: 1, name: 'Ron Weasley' },
  { id: 2, name: 'Harry Potter' },
  { id: 4, name: 'Hermione Granger' },
  { id: 6, name: 'Draco Malfoy' },
  { id: 8, name: 'Tom Riddle' },
  { id: 21, name: 'Albus Dumbledore' },
];

const found = search(21, items, (value, subject) => {
  if (value > subject.id) {
    return 1;
  } else if (value < subject.id) {
    return -1;
  }
  return 0;
});

// Should return { id: 21, name: 'Albus Dumbledore' }
````
