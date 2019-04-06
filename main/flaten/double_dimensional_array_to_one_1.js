'use strict';

var r = [];
function flat(item) {
  if (typeof(item) == 'number') {
    r.push(item);
    return;
  };
  item.forEach(element => {
    flat(element);
  });
}

function double_to_one(collection) {
  flat(collection);
  return r;
}

// console.log(double_to_one([1, [2], [3, 4]]));

module.exports = double_to_one;
