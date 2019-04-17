'use strict';

function find_first_even(collection) {
  for (let item of collection) {
    if (item % 2 == 0) return item;
  }
}

// var collection = [1,11,27,20,4,9,15];
// console.log(find_first_even(collection));


module.exports = find_first_even;

